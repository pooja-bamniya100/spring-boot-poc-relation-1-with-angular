import { EmpEducation } from './emp-education';
import { EmployeeContacts } from './employee-contacts';
import { EmployeeRole } from './employee-role';
import { EmploymentDetail } from './employment-detail';
import { EmployeeDetail } from "./employee-detail";
import { EmpAddress } from './emp-address';
import { Observable } from 'rxjs';

export class Employee {

    emp_id:number;
    username:String;
    password:String;

     emp_Education:EmpEducation[];
     address:EmpAddress[];
    employee_detail:EmployeeDetail;
   employment_Detail: EmploymentDetail;
    employee_Role:EmployeeRole;
    emp_contacts:EmployeeContacts  ;
	
	constructor(
	emp_id?:number, 
		 username?:String,
		 password?:String,
		 emp_Education?: EmpEducation[],
		   address?:EmpAddress[],
		   employee_detail?:EmployeeDetail,
		   employment_Detail?:EmploymentDetail,
		   employee_Role?:EmployeeRole,
		   emp_contacts?:EmployeeContacts
	){}

	


}



