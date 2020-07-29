export class LoginEntity {
    password:String;
    username:String;
    constructor(
        password?:String,
         username?:String
        


    ){  }
    public setUsername( username:String)
  {
      this.username=username;
  }
  public setPassword( password:String)
  {
        this.password=password;
  }
}
