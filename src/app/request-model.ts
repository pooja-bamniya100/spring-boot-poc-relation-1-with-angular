import { Observable } from 'rxjs';
import { EmpEducation } from './emp-education';
import { EmpAddress } from './emp-address';

import { EmploymentDetail } from './employment-detail';
import { EmployeeRole } from './employee-role';
import { EmployeeContacts } from './employee-contacts';
import { EmployeeDetail } from './employee-detail';

export class RequestModel {
    emp_id: number;
    username: String;
    password: String;
    confirmPassword: String;
    emp_Education: EmpEducation[];
    address: EmpAddress[];
    employee_detail: EmployeeDetail;
    employment_Detail: EmploymentDetail;
    employee_Role: EmployeeRole;
    emp_contacts: EmployeeContacts;
  
    
  
    
//     emp_id:number;
//     username:String;
//     password:String;
//     confirmPassword:String;
//      emp_Education:EmpEducation[];
//      address:EmpAddress[];
//     employee_detail:EmployeeDetail;
//    employment_Detail: EmploymentDetail;
//     employee_Role:EmployeeRole;
//     emp_contacts:EmployeeContacts  ;
    contructor(
        emp_id?:number,
        username?:String,
        password?:String,
        confirmPassword?:String,
         emp_Education?:EmpEducation[],
         address?:EmpAddress[],
        employee_detail?:EmployeeDetail,
       employment_Detail?: EmploymentDetail,
        employee_Role?:EmployeeRole,
        emp_contacts?:EmployeeContacts){
         


        }
        setRequestModel( emp_id:number,
            username:String,
            password:String,
            confirmPassword:String,
             emp_Education:EmpEducation[],
             address:EmpAddress[],
            employee_detail:EmployeeDetail,
           employment_Detail: EmploymentDetail,
            employee_Role:EmployeeRole,
            emp_contacts:EmployeeContacts):void
        {
            this.emp_id=emp_id,
            this.username=username,
            this.password=password,
            this.confirmPassword=confirmPassword,
            this.emp_Education=emp_Education,
            this.address=address,
            this.employee_detail=employee_detail,
            this.employment_Detail=employment_Detail,
            this.employee_Role=employee_Role,
            this.emp_contacts=emp_contacts      
        }
            setEmployee_detail(employee_detail:EmployeeDetail){
                this.employee_detail=employee_detail;
            }

            setEmployment_Detail(employment_Detail:EmploymentDetail)
            {
                this.employment_Detail=employment_Detail;
            }

            setEmployee_Role(employee_Role:EmployeeRole)
            {
                this.employee_Role=employee_Role;
            }
            setEmp_contacts(emp_contacts:EmployeeContacts){
                this.emp_contacts=emp_contacts;
            }
              setAddress(empAddress:EmpAddress,empAddress1:EmpAddress){
              this.address=[
               empAddress,
               empAddress1
          ]
       }
       setEmp_Education(empEducation:EmpEducation){
         this.emp_Education=[
             empEducation,
         ]
       }
    //    setAddress(empAddress:EmpAddress,empAddress1:EmpAddress){
    //      this.address= new Observable<EmpAddress>(function subscribe(subscriber) {
    //        subscriber.next(empAddress);
    //        subscriber.next(empAddress1);
          
    //      });
    //   }
   
    //   setEmp_Education(empEducation:EmpEducation,empEducation1:EmpEducation,empEducation2:EmpEducation){
    //    this.emp_Education=this.address= new Observable<EmpAddress>(function subscribe(subscriber) {
    //      subscriber.next(empEducation);
    //      subscriber.next(empEducation1);
    //      subscriber.next(empEducation2);
        
    //    });
            
    //  }
         getAddress()
         {
             return this.address;
         }
         
          get Emp_Education()
          {
              return this.emp_Education;
          }
   
         
}
