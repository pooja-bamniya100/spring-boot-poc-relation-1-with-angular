export class IdOrPasswordEntity {
    password:String;
    confirmPassword:String;
    currentPassword:String;
         email:String;

         constructor(   
     password?:String,
confirmPassword?:String,
currentPassword?:String,
	 email?:String){}
}
