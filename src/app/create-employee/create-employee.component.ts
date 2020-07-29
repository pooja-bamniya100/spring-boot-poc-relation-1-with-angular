import { Component, OnInit } from '@angular/core';
import { RequestModel } from '../request-model';
import { EmpAddress } from '../emp-address';

import { EmpEducation } from '../emp-education';
import { EmployeeContacts } from '../employee-contacts';
import { EmployeeRole } from '../employee-role';
import { EmploymentDetail } from '../employment-detail';
import { EmployeeService } from '../employee.service';
import { FormGroup } from '@angular/forms';
import { EmployeeDetail } from '../employee-detail';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,private employeeservice:EmployeeService) { }  
  
  requestEntity : RequestModel=new RequestModel();
  empAddress: EmpAddress=new EmpAddress();
  empAddress1: EmpAddress=new EmpAddress();
  empDetail:EmployeeDetail=new EmployeeDetail();
  empEducation:EmpEducation=new EmpEducation();
  empEducation1:EmpEducation=new EmpEducation();
  empEducation2:EmpEducation=new EmpEducation();
  employeeContacts:EmployeeContacts=new EmployeeContacts();
  employeeRole:EmployeeRole=new EmployeeRole();
  employementDetail:EmploymentDetail=new EmploymentDetail();
  
  submitted = false;  
  token= this.route.snapshot.params['token'];
  ngOnInit() {  
    this.submitted=false;  
   
    this.requestEntity.setEmp_contacts(this.employeeContacts);
    this.requestEntity.setEmployee_Role(this.employeeRole);
    this.requestEntity.setEmployee_detail(this.empDetail);
    this.requestEntity.setEmployment_Detail(this.employementDetail);
    

  }  
  saveEmployee(){
    this.requestEntity.setEmp_Education(this.empEducation);
    this.requestEntity.setAddress(this.empAddress,this.empAddress1);
  
    this.save(); 
  }
  save() {  
    this.employeeservice.createEmployee(this.requestEntity,this.token)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.requestEntity = new RequestModel();  
    this.submitted=true;
  } 

  addEmployeeForm()
{
  this.requestEntity =new RequestModel();
  this.empAddress=new EmpAddress();
  this.empAddress1=new EmpAddress();
  this.empDetail=new EmployeeDetail();
  this.empEducation=new EmpEducation();
  this.empEducation1=new EmpEducation();
  this.empEducation2=new EmpEducation();
  this.employeeContacts=new EmployeeContacts();
  this.employeeRole=new EmployeeRole();
  this.employementDetail=new EmploymentDetail();
  this.ngOnInit();
}
}
