import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  userData={email:"",pswd:"",role:""}
  listRegister!:Array<any>
  constructor(private regService:RegisterService) { }

  ngOnInit(): void {
    this.listRegister=this.regService.getallRegister()
    
  }
  save(){
    this.regService.addUser(this.userData)
    console.log("listRegister=>",this.listRegister)
  }

}
