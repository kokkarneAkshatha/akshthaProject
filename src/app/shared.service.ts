import { Injectable } from '@angular/core';
import { Patientregistration } from './model/patientregistration';
import { Login } from './model/login';
import {Otp} from './model/otp';
import { Doctor } from './model/doctor';
import {Appointment} from './model/appointment'
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  user: Patientregistration ;
  login:Login;
  otp:Otp;
  doctor:Doctor;
  appointment:Appointment;
  

   
  constructor() { 
    this.user = new Patientregistration();
    this.login=new Login();
    this.otp=new Otp();
    this.doctor=new Doctor();
    this.appointment=new Appointment();
  }
}
