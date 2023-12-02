import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  log={email:"",pswd:""}
 alertvar: any;
  constructor(private logService:RegisterService,private route:Router) { }

  ngOnInit(): void {
  }
  LogIn(){
     let test=this.logService.loginTest(this.log)
     if (test) {
         this.route.navigateByUrl('/dash')
         this.alertvar=false

     }this.alertvar=true
  }

}
