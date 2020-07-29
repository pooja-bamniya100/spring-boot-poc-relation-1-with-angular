import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import {DataTablesModule} from 'angular-datatables';  

import { EmployeeListComponent } from './employee-list/employee-list.component';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

import { LoginUpdatePasswordComponent } from './login-update-password/login-update-password.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
  
    EmployeeListComponent,
    CreateEmployeeComponent,
    LoginEmployeeComponent,
    UpdateEmployeeComponent,
    LoginUpdatePasswordComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    DataTablesModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
