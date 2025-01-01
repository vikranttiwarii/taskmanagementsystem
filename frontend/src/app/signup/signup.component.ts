import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private signupService: SignupService,public router : Router) { }

  ngOnInit(): void {
  }
  roles = environment.roles;
  signupform = new FormGroup({
    Username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    roleId: new FormControl('', Validators.required)
  })

  create() {
    if (this.signupform.valid) {
      this.signupService.create(this.signupform.value).subscribe((res) => {
        if (res.error) {
          Swal.fire('info', 'This User is already Exist', 'info')
        } else {
          this.signupform.reset();
          this.router.navigate([''])
          Swal.fire('success', "Added", 'success')
        }
      }, (err) => {
        Swal.fire('error', 'Something Went Wrong!', 'error')
      })
    }
  }
}
