
// import { EmploymentDetail } from './../employment-detail';
// import { EmployeeRole } from './../employee-role';
// import { EmployeeContacts } from './../employee-contacts';
// import { EmpEducation } from './../emp-education';

// import { EmpAddress } from './../emp-address';

// import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from '../employee.service';

// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { RequestModel } from '../request-model';
// import { EmployeeDetail } from '../employee-detail';

// @Component({
//   selector: 'app-add-employee',
//   templateUrl: './add-employee.component.html',
//   styleUrls: ['./add-employee.component.css']
// })
// export class AddEmployeeComponent implements OnInit {
//   [x: string]: any;



//   constructor(private employeeservice:EmployeeService) { }  
  
//   requestEntity : RequestModel=new RequestModel();  
//   empAddress: EmpAddress=new EmpAddress();
//   empAddress1: EmpAddress=new EmpAddress();
//   empDetail:EmployeeDetail=new EmployeeDetail();
//   empEducation:EmpEducation=new EmpEducation();
//   empEducation1:EmpEducation=new EmpEducation();
//   empEducation2:EmpEducation=new EmpEducation();
//   employeeContacts:EmployeeContacts=new EmployeeContacts();
//   employeeRole:EmployeeRole=new EmployeeRole();
//   employementDetail:EmploymentDetail=new EmploymentDetail();

//   submitted = false;  
  
//   ngOnInit() {  
//     this.submitted=false;  
//   }  
  
//   employeesaveform=new FormGroup({  
//     username:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
//     //email:new FormControl('',[Validators.required,Validators.email]),  
//     password:new FormControl()  ,
//     confirmPassword:new FormControl(),

//      firstname:new FormControl(),
//      lastname:new FormControl(),
//      fathersName:new FormControl(),
//      dob:new FormControl(),

//      contact:new FormControl(),
//      alternateContact:new FormControl(),
//      email:new FormControl('',[Validators.required,Validators.email]),
    
//      joiningdate:new FormControl(),
//       salary:new FormControl(),
//      previousCompany:new FormControl(),
//      experience:new FormControl(),
//      role :new FormControl(),

//      city1:new FormControl(),
//      dist1:new FormControl(),
//      country1:new FormControl(),
//      addType1: new FormControl(),
//       pincode1:new FormControl(),

//       city:new FormControl(),
//       dist:new FormControl(),
//       country:new FormControl(),
//       addType: new FormControl(),
//        pincode:new FormControl(),

//        qualification:new FormControl(),
//        scName:new FormControl(),
//        univercity:new FormControl(),
//        perc:new FormControl(),
//        passYear:new FormControl(),

//        qualification1:new FormControl(),
//        scName1:new FormControl(),
//        univercity1:new FormControl(),
//        perc1:new FormControl(),
//        passYear1:new FormControl(),

//        qualification2:new FormControl(),
//        scName2:new FormControl(),
//        univercity2:new FormControl(),
//        perc2:new FormControl(),
//        passYear2:new FormControl(),
//   });  
  

//   saveEmployee():void{  
//     this.requestEntity=new RequestModel();    
//     this.empAddress=new EmpAddress();
//     this.empAddress1=new EmpAddress();
//     this.empDetail=new EmployeeDetail();
//     this.empEducation=new EmpEducation();
//     this.empEducation1=new EmpEducation();
//     this.empEducation2=new EmpEducation();
//     this.employeeContacts=new EmployeeContacts();
//     this.employeeRole=new EmployeeRole();
//     this.employementDetail=new EmploymentDetail();
  
//     this.requestEntity.username=this.employeesaveform.get('username').value;  
//     this.requestEntity.password=this.employeesaveform.get('password').value; 
//     this.requestEntity.confirmPassword=this.employeesaveform.get('confirmPassword').value;  
//     this.empDetail.firstname=this.employeesaveform.get('firstname').value;
//     this.empDetail.lastname=this.employeesaveform.get('lastname').value;
//     this.empDetail.fathersName=this.employeesaveform.get('fathersName').value;
//     this.empDetail.dob=this.employeesaveform.get('dob').value;
//     this.employeeContacts.contact=this.employeesaveform.get('contact').value;
//     this.employeeContacts.alternam_contact=this.employeesaveform.get('alternateContact').value;
//     this.employeeContacts.email=this.employeesaveform.get('email').value;
//     this.employeeRole.role=this.employeesaveform.get('role').value;
//     this.employementDetail.joining_date=this.employeesaveform.get('joiningdate').value;
//     this.employementDetail.salary=this.employeesaveform.get('salary').value;
//     this.employementDetail.previous_company=this.employeesaveform.get('previousCompany').value;
//     this.employementDetail.experience=this.employeesaveform.get('experience').value;

//     this.empAddress.addType=this.employeesaveform.get('addType').value;
//     this.empAddress.city=this.employeesaveform.get('city').value;
//     this.empAddress.dist=this.employeesaveform.get('dist').value;
//     this.empAddress.state=this.employeesaveform.get('state').value;
//     this.empAddress.country=this.employeesaveform.get('conutry').value;
//     this.empAddress.pincode=this.employeesaveform.get('pincode').value;

//     this.empAddress1.addType=this.employeesaveform.get('addType1').value;
//     this.empAddress1.city=this.employeesaveform.get('city1').value;
//     this.empAddress1.dist=this.employeesaveform.get('dist1').value;
//     this.empAddress1.state=this.employeesaveform.get('state1').value;
//     this.empAddress1.country=this.employeesaveform.get('conutry1').value;
//     this.empAddress1.pincode=this.employeesaveform.get('pincode1').value;


//     this.empEducation.qualification=this.employeesaveform.get('qualification').value;
//     this.empEducation.sc_name=this.employeesaveform.get('scName').value;
//     this.empEducation.university=this.employeesaveform.get('university').value;
//     this.empEducation.perc=this.employeesaveform.get('perc').value;
//     this.empEducation.pass_year=this.employeesaveform.get('PassYear').value;

//     this.empEducation1.qualification=this.employeesaveform.get('qualification1').value;
//     this.empEducation1.sc_name=this.employeesaveform.get('scName1').value;
//     this.empEducation1.university=this.employeesaveform.get('university1').value;
//     this.empEducation1.perc=this.employeesaveform.get('perc1').value;
//     this.empEducation1.pass_year=this.employeesaveform.get('passYear1').value;

//     this.empEducation2.qualification=this.employeesaveform.get('qualification2').value;
//     this.empEducation2.sc_name=this.employeesaveform.get('scName2').value;
//     this.empEducation2.university=this.employeesaveform.get('university2').value;
//     this.empEducation2.perc=this.employeesaveform.get('perc2').value;
//     this.empEducation2.pass_year=this.employeesaveform.get('passYear2').value;

    
//     this.requestEntity.setAddress(this.empAddress,this.empAddress1);
//    // this.requestEntity.setEmp_Education(this.empEducation,this.empEducation1,this.empEducation2);
//     this.requestEntity.employee_detail=this.empDetail;
//     this.requestEntity.emp_contacts=this.employeeContacts;
//     this.requestEntity.employee_Role=this.employeeRole;
//     this.requestEntity.employment_Detail=this.employementDetail;
    
//     this.submitted=true;
//     this.save();  
//   }  
  
  
//   save() {  
//     this.employeeservice.createEmployee(this.requestEntity,"")  
//       .subscribe(data => console.log(data), error => console.log(error));  
//     this.requestEntity = new RequestModel();  
//   }  
//   addEmployeeForm(){  
//     this.submitted=false;  
//     this.employeesaveform.reset();  
//   }  
//   get Username(){  
//     return this.employeesaveform.get('username');  
//   }  
  
//   get Password(){  
//     return this.employeesaveform.get('password');  
//   }  

//   get ConfirmPassword(){  
//     return this.employeesaveform.get('confirmPassword');  
//   }  
   
 
//   get Firstname()
//   {
//     return this.employeesaveform.get('firstname'); 
//   }
//   get Lastname()
//   {
//     return this.employeesaveform.get('lastname'); 
//   }
//   get FathersName()
//   {
//     return this.employeesaveform.get('fathersName'); 
//   }
//   get Dob()
//   {
//     return this.employeesaveform.get('dob'); 
//   }
  
  
   
  
//   get Contact()
//   {
//     return this.employeesaveform.get('contact'); 
//   }
//   get AlternateContact()
//   {
//     return this.employeesaveform.get('alternateContact'); 
//   }
//   get Email()
//   {
//     return this.employeesaveform.get('email'); 
//   }
//   get Role()
//   {
//     return this.employeesaveform.get('role'); 
//   }
  
  

//   get AddType()
//   {
//     return this.employeesaveform.get('addType'); 
//   }

//   get City()
//   {
//     return this.employeesaveform.get('city'); 
//   }
  
//   get Dist()
//   {
//     return this.employeesaveform.get('dist'); 
//   }
//   get State()
//   {
//     return this.employeesaveform.get('state'); 
//   }
//   get Conutry()
//   {
//     return this.employeesaveform.get('country'); 
//   }
//   get Pincode()
//   {
//     return this.employeesaveform.get('pincode'); 
//   }
//   get AddType1()
//   {
//     return this.employeesaveform.get('addType1'); 
//   }

//   get City1()
//   {
//     return this.employeesaveform.get('city1'); 
//   }
  
//   get Dist1()
//   {
//     return this.employeesaveform.get('dist1'); 
//   }
//   get State1()
//   {
//     return this.employeesaveform.get('state1'); 
//   }
//   get Conutry1()
//   {
//     return this.employeesaveform.get('country1'); 
//   }
//   get Pincode1()
//   {
//     return this.employeesaveform.get('pincode1'); 
//   }

//   get Joiningdate()
//   {
//     return this.employeesaveform.get('joiningdate'); 
//   }
//   get Salary()
//   {
//     return this.employeesaveform.get('salary'); 
//   }
//   get PreviousCompany()
//   {
//     return this.employeesaveform.get('previousCompany'); 
//   }
//   get Experience()
//   {
//     return this.employeesaveform.get('experience'); 
//   }
  
//   get Qualification()
//   {
//     return this.employeesaveform.get('qualification'); 
//   }
//   get ScName()
//   {
//     return this.employeesaveform.get('scName'); 
//   }
//   get University()
//   {
//     return this.employeesaveform.get('university'); 
//   } 
//   get Perc()
//   {
//     return this.employeesaveform.get('perc'); 
//   }
// 	get PassYear()
//   {
//     return this.employeesaveform.get('passYear'); 
//   }
//   get Qualification1()
//   {
//     return this.employeesaveform.get('qualification1'); 
//   }
//   get ScName1()
//   {
//     return this.employeesaveform.get('scName1'); 
//   }
//   get University1()
//   {
//     return this.employeesaveform.get('university1'); 
//   } 
//   get Perc1()
//   {
//     return this.employeesaveform.get('perc1'); 
//   }
// 	get PassYear1()
//   {
//     return this.employeesaveform.get('passYear1'); 
//   }
//   get Qualification2()
//   {
//     return this.employeesaveform.get('qualification2'); 
//   }
//   get ScName2()
//   {
//     return this.employeesaveform.get('scName2'); 
//   }
//   get University2()
//   {
//     return this.employeesaveform.get('university2'); 
//   } 
//   get Perc2()
//   {
//     return this.employeesaveform.get('perc2'); 
//   }
// 	get PassYear2()
//   {
//     return this.employeesaveform.get('passYear2'); 
//   }
  
















//     // saveEmployee():void{  
//   //   this.requestEntity=new RequestEntity();    
//   //   this.requestEntity.username=this.Username.value;  
//   //   this.requestEntity.password=this.Password.value;  
//   //   this.requestEntity.confirmPassword=this.ConfirmPassword.value;  
//   //   this.empDetail.firstname=this.Firstname.value;
//   //   this.empDetail.lastname=this.Lastname.value;
//   //   this.empDetail.fathersName=this.FathersName.value;
//   //   this.empDetail.dob=this.Dob.value;
//   //   this.employeeContacts.contact=this.Contact.value;
//   //   this.employeeContacts.alternam_contact=this.AlternateContact.value;
//   //   this.employeeContacts.email=this.Email.value;
//   //   this.employeeRole.role=this.Role.valueChanges;
//   //   this.employementDetail.joining_date=this.Joiningdate.value;
//   //   this.employementDetail.salary=this.Salary.value;
//   //   this.employementDetail.previous_company=this.PreviousCompany.value;
//   //   this.employementDetail.experience=this.Experience.value;

//   //   this.empAddress.addType=this.AddType.value;
//   //   this.empAddress.city=this.City.value;
//   //   this.empAddress.dist=this.Dist.value;
//   //   this.empAddress.state=this.State.value;
//   //   this.empAddress.country=this.Conutry.value;
//   //   this.empAddress.pincode=this.Pincode.value;

//   //   this.empAddress1.addType1=this.AddType1.value;
//   //   this.empAddress1.city1=this.City1.value;
//   //   this.empAddress1.dist1=this.Dist1.value;
//   //   this.empAddress1.state1=this.State1.value;
//   //   this.empAddress1.country1=this.Conutry1.value;
//   //   this.empAddress1.pincode1=this.Pincode1.value;


//   //   this.empEducation.qualification=this.Qualification.value;
//   //   this.empEducation.sc_name=this.ScName.value;
//   //   this.empEducation.univercity=this.University.value;
//   //   this.empEducation.perc=this.Perc.value;
//   //   this.empEducation.pass_year=this.PassYear.value;

//   //   this.empEducation1.qualification=this.Qualification1.value;
//   //   this.empEducation1.sc_name=this.ScName1.value;
//   //   this.empEducation1.univercity=this.University1.value;
//   //   this.empEducation1.perc=this.Perc1.value;
//   //   this.empEducation1.pass_year=this.PassYear1.value;

//   //   this.empEducation2.qualification=this.Qualification2.value;
//   //   this.empEducation2.sc_name=this.ScName2.value;
//   //   this.empEducation2.univercity=this.University2.value;
//   //   this.empEducation2.perc=this.Perc2.value;
//   //   this.empEducation2.pass_year=this.PassYear2.value;

    
//   //   this.requestEntity.setAddress(this.empAddress,this.empAddress1);
//   //   this.requestEntity.setEmp_Education(this.empEducation,this.empEducation1,this.empEducation2);
//   //   this.requestEntity.employee_detail=this.empDetail;
//   //   this.requestEntity.emp_contacts=this.employeeContacts;
//   //   this.requestEntity.employee_Role=this.employeeRole;
//   //   this.requestEntity.employment_Detail=this.employementDetail;
    
//   //   this.submitted=true;
//   //   this.save();  
//   // }  
  
// }  
