export class EmployeeDetail {

   employee_Detail_Id:number=0;
  firstname:String="";
  lastname:String="";
  fathersName:String="";
  dob:Date=new Date;
  active:boolean=false;
  
    constructor( 
      employee_Detail_Id?:number,
      firstname?:String,
      lastname?:String,
      fathersName?:String,
      dob?:Date,
      active?:boolean){}
}
