import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { environment } from 'src/environments/environment';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  roles = environment.roles;
  data: any;
  constructor(private signupService: SignupService,private TaskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.signupService.getData().subscribe((res) => {
      if(res.data.length){
        console.log(res.data)
        this.data =res.data.map(user => {
          const roleName = this.roles.find(role => role.roleId === user.roleId).roleName || "Unknown Role";
          return { ...user, role: roleName }; 
        });
      }
    })
  }
}
