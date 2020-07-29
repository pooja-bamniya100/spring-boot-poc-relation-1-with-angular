import { Employee } from './../employee';
import { LoginEntity } from '../login-entity';


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeservice:EmployeeService) { }
       entity:LoginEntity=new LoginEntity();
       employee:Employee=new Employee();
      emp_username:String;
      emp_password:String;
      token:any;
      
      ngOnInit(): void {
        this.entity=new LoginEntity(); 
  }
  login()
  {
    this.entity.setUsername(this.emp_username);
    this.entity.setPassword(this.emp_password);
    let responce=this.employeeservice.generateToken(this.entity);
 
   // responce.subscribe(data=>console.log(data));
  //  responce.subscribe(data=> this.home(data));
    responce.subscribe(data=> this.signIn(data));
   

    
  }
  // getEmployee(){
  //   this.employeeservice.getEmployee(this.id,this.token)
  //   .subscribe(data => {
  //     console.log(data);
  
     
  //     this.employee = data;
  //   },
  //    error => console.log(error));
  // }
  signIn(token)
  {
    this.router.navigate(['/home',token]);
  }
  home(token)
  {
    let responce=this.employeeservice.welcome(token);
    responce.subscribe(data=>console.log(data));

  }
}
