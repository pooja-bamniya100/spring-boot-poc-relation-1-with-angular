import { Component, OnInit } from '@angular/core';
import { EmpEducation } from '../emp-education';
import { EmpAddress } from '../emp-address';
import { Subject, Observable } from 'rxjs';
import { RequestModel } from '../request-model';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

 
 
  data:any;

  constructor(private route: ActivatedRoute,private router: Router,private employeeservice:EmployeeService) { }
 
  id:number;
  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject(); 

 
 empAddress: EmpAddress=new EmpAddress(0,"","","","","",0);
 empAddress1: EmpAddress=new EmpAddress(0,"","","","","",0);
 empEducation:EmpEducation=new EmpEducation();
 empEducation1:EmpEducation=new EmpEducation();
 empEducation2:EmpEducation=new EmpEducation();
 requestEntity : RequestModel=new RequestModel();
 employee:Employee;
//  empDetail:EmployeeDetail=new EmployeeDetail();
//  employeeContacts:EmployeeContacts=new EmployeeContacts();
//  employeeRole:EmployeeRole=new EmployeeRole();
//  employementDetail:EmploymentDetail=new EmploymentDetail();
  
cities:String[];
qualificationArray:String[];
detail;
token = this.route.snapshot.params['token'];
  ngOnInit(): void {
    this.employee=new Employee();
    console.log("update"+this.token);
    this.detail=true;
    this.id = this.route.snapshot.params['id'];
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    }; 
    this.getEmployee();
  }

 getEmployee(){
  
  this.employeeservice.getEmployee(this.id,this.token)
  .subscribe(data => {
   
    this.employee = data;
    this.requestEntity.setRequestModel(this.employee.emp_id, this.employee.username,
      this.employee.password,this.employee.password,
      this.employee.emp_Education,
      this.employee.address,
      this.employee.employee_detail,
      this.employee.employment_Detail,
      this.employee.employee_Role,
      this.employee.emp_contacts);
    
      this.empAddress=this.employee.address[0];
      this.empAddress1=this.employee.address[1];
      this.empEducation=this.employee.emp_Education[0];

  },
   error => console.log(error));
   //this.setForUpdate( this.employee);

   
 }

  updateEmployee()
{
 
  this.employeeservice.updateEmployee(this.requestEntity.emp_id,this.requestEntity,this.token).subscribe(  
    data => {       
       
      this.employeeservice.getEmployeeList(this.token).subscribe(data =>{  
        this.employee =data  
       
        this.employee=new Employee();
        })  
    },  
    error => console.log(error));  
  this.employee=new Employee();
  this.requestEntity=new RequestModel();
} 
gotoUpdate()
{
  this.detail=false;
}
gotoList() {
  this.router.navigate(['/view-employee',this.token]);
}
// gotoUpdatePass(id:number)
// {
//   this.router.navigate(['/changePassword',id,this.token]);
// }
gotoDetail()
{
  
}
}
