import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginUpdatePasswordComponent } from './login-update-password/login-update-password.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },  
  { path: 'login', component: LoginEmployeeComponent },
  
  { path: 'add-employee/:token', component: CreateEmployeeComponent },  
  { path: 'update/:id/:token', component: UpdateEmployeeComponent },
  { path: 'view-employee/:token', component: EmployeeListComponent },
  { path: 'home/:token', component: HomeComponent},
  { path: 'changePassword/:id/:token', component: LoginUpdatePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
