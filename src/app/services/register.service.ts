import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  registerList!:Array<any>
  //déclaration varible canactiv 
  private canActiv:boolean=false
  constructor() {
    this.registerList=[
      {email:"mahdi@gmail.com",pswd:"123",role:"ADMIN"},
      {email:"zied@gmail.com",pswd:"456",role:"USER"},
      {email:"mohamed@gmail.com",pswd:"789",role:"USER"},

    ]
   }
    canactivLog(){
    return this.canActiv
   }
   getallRegister(){
    return this.registerList
   }
   addUser(data:any){
    this.registerList.push(data)
   }
   loginTest(data:any){
    for (let user of this.registerList) {
      if ((user.email==data.email)&&(user.pswd==data.pswd)) {
        this.canActiv=true
        return true
      }
      
    }return false
   }
}
