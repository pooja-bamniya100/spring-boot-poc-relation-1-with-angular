import { EmployeeContacts } from './../employee-contacts';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { IdOrPasswordEntity } from '../id-or-password-entity';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login-update-password',
  templateUrl: './login-update-password.component.html',
  styleUrls: ['./login-update-password.component.css']
})
export class LoginUpdatePasswordComponent implements OnInit {
  

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeservice:EmployeeService) { }
  

  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject(); 
  id:number;
  isUpdate=false;
  isUpdated=true;
  token = this.route.snapshot.params['token'];
   entity:IdOrPasswordEntity=new IdOrPasswordEntity();
   employee:Employee=new Employee();
    ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    }; 
    this.employeeservice.getEmployee(this.id,this.token)
    .subscribe(data => {
    this.employee = data;
  });
  }

  checkPassword()
  {
    if(this.employee.password==this.entity.currentPassword)
    {
      if(this.employee.emp_contacts.email==this.entity.email)
      {
        this.isUpdate=true;
      }
        
      
    }
  }
  updatePassword(){
    this.employeeservice.updatePassword(this.employee.emp_id,this.entity,this.token);
 //   this.router.navigate(['/view-employee']);
  }
  gotoList()
  {
    this.router.navigate(['/view-employee',this.token]);
    
  }
  gotoUpdate()
  {
    this.router.navigate(['update', this.id,this.token]);
  }
}
