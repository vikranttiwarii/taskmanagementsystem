import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { UserlistComponent } from './user/userlist.component';
import { TasklistComponent } from './tasklist/tasklist.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:'signup',
    component:SignupComponent,
  },
  {
    path:'userlist',
    component:UserlistComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'tasklist',
    component:TasklistComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
