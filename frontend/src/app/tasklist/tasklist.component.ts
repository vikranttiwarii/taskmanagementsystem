import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { environment } from 'src/environments/environment';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  constructor(private TaskService: TaskService, private router: Router) { }
  roleId: number;
  userList: any
  toggle: boolean = true;
  taskList: any
  loggedInId: any
  action: any = 'create'
  obj = {}
  objupdate: any;
  ngOnInit(): void {
    this.getSingleData()
  }

  taskform = new FormGroup({
    title: new FormControl('', Validators.required),
    discription: new FormControl('', [Validators.required]),
    assignTo: new FormControl('', Validators.required),
    taskId: new FormControl('')
  })


  createAndUpdateTask() {
    if (this.action == 'create') {
      if (this.taskform.valid) {
        this.TaskService.createTask(this.taskform.value).subscribe((res) => {
          if (!res.error) {
            this.toggle = !this.toggle;
            this.getTaskListAccToRole(this.obj)
          }
        }, (err) => {
          Swal.fire('error', 'Something Went Wrong!', 'error')
        })
      }
    }
    if (this.action == 'update') {
      console.log(this.objupdate)
      console.log(this.taskform.value)
      this.TaskService.updateTask(this.taskform.value).subscribe((res) => {
        if (!res.error) {
          this.getTaskListAccToRole(this.obj)
          this.action = 'create'
          this.toggle = !this.toggle;
        }
      }, (err) => {
        Swal.fire('error', 'Something Went Wrong!', 'error')
      })
    }
  }

  getSingleData() {
    this.TaskService.getSingleData().subscribe((res) => {
      if (!res.error && res.data) {
        this.roleId = res.data.roleId;
        this.loggedInId = res.data._id;
        this.getTaskListAccToRole(this.obj)
        console.log(this.roleId)
      }
    }, (err) => {
      Swal.fire('error', 'Something Went Wrong!', 'error')
    })
  }

  getUserListAccToRole() {
    this.toggle = !this.toggle;
    this.TaskService.getUserListAccToRole(this.roleId).subscribe((res) => {
      if (!res.error && res.data && res.data.length) {
        for (let i of res.data) {
          if (i['roleId'] == 1) {
            i['username'] = `${i['username']}-Manager`;
          } else if (i['roleId'] == 2) {
            i['username'] = `${i['username']}-Team Lead`;
          } else {
            i['username'] = `${i['username']}-Employee`;
          }
        }
        this.userList = res.data;
      }
    }, (err) => {
      Swal.fire('error', 'Something Went Wrong!', 'error')
    })
  }

  getTaskListAccToRole(obj) {
    obj['roleId'] = this.roleId;
    this.TaskService.getTaskListAccToRole(obj).subscribe((res) => {
      if (!res.error && res.data && res.data.length) {
        this.taskList = res.data;
        console.log(this.taskList)
      } else {
        this.taskList = []
      }
    }, (err) => {
      Swal.fire('error', 'Something Went Wrong!', 'error')
    })
  }

  filterByStatus(status) {
    this.obj['status'] = status.value;
    this.getTaskListAccToRole(this.obj)
  }

  updateTask(data, handler) {
    if (handler == 'update') {
      this.action = 'update'
      this.taskform.patchValue(data)
      this.getUserListAccToRole()
      this.toggle = this.toggle;
      this.taskform.get('taskId').setValue(data._id)
    } else {
      let obj = { taskId: data._id }
      this.TaskService.updateTask(obj).subscribe((res) => {
        if (!res.error) {
          console.log(this.obj)
          this.getTaskListAccToRole(this.obj)
        }
      }, (err) => {
        Swal.fire('error', 'Something Went Wrong!', 'error')
      })
    }
  }

  deleteTask(taskId: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.TaskService.deleteTask(taskId).subscribe((res) => {
          if (res.error == false) {
            Swal.fire(
              'Deleted!',
              'Your task has been deleted.',
              'success'
            )
            this.getTaskListAccToRole(this.obj)
          }
        }, (err) => {
          Swal.fire('error', 'Something Went Wrong!', 'error')
        })
      }
    })
  }
  viewuserlist(){
    this.router.navigate(['/userlist'])
  }

  logout() {
    localStorage.clear();
    this.router.navigate([''])
  }
}
