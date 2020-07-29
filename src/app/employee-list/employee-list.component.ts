import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';  
import { Employee } from '../employee';  
import { Observable,Subject } from "rxjs";  
  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';

import { EmpAddress } from '../emp-address';

  
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  

 constructor(private route: ActivatedRoute,
  private router: Router,private employeeservice:EmployeeService) { }  

 
  
   dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  employees: Employee[];  
  empAddressArray: EmpAddress[];
  data:any;
  employee: Employee=new Employee();
  deleteMessage=false;  
  deactivate=false;
  employeelist:any;  
  search=false;
  show=true;

   id:number;
  
   token= this.route.snapshot.params['token'];

  ngOnInit() {  
    
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };    
    
    this.getEmployees();
  }  

  getEmployees()
  {
    this.employeeservice.getEmployeeList(this.token)
    .subscribe(data=>{  
      this.employees =data; 
      console.log(data);
      this.dtTrigger.next(); 
      },
      error => console.log(error))  ;
      this.show=true; 
      this.search=false;
  }
  
  employeesearchform=new FormGroup({  
    id:new FormControl()
  });

  getEmployee(){
     
    this.id=this.employeesearchform.get('id').value;  
    this.employeeservice.getEmployee(this.id,this.token)
    .subscribe(data => {
      console.log(data);
      this.show=false; 
     
      this.employee = data;
    },
     error => console.log(error));
  }
   


  deleteEmployee(id: number) {  
    console.log("deactivate"+this.token);
    this.employeeservice.deleteEmployee(id,this.token)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
         this.getEmployees(); 
        },  
        error => console.log(error));  
  }  

  deactivateEmployee(id: number) {  
    console.log("deactivate"+this.token);
    this.employeeservice.deactivateEmployee(id,this.token)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deactivate=true;
          this.getEmployees(); 
        },  
        error => console.log(error));  
  } 

  gotoDetail(id:number)
  {
    this.router.navigate(['update', id,this.token]);
  }
 }

