import { Injectable } from '@angular/core';
import { Patientregistration } from './model/patientregistration';
import { Login } from './model/login';
import {Otp} from './model/otp';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  user: Patientregistration ;
  login:Login;
  otp:Otp;
  

   
  constructor() { 
    this.user = new Patientregistration();
    this.login=new Login();
    this.otp=new Otp();
  }
}
