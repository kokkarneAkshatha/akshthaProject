import { Component, OnInit } from '@angular/core';
import {SharedService } from '../shared.service';
import {Appointment} from "../model/appointment"
import {ApoointmentService} from "../service/apoointment.service"
@Component({
  selector: 'app-my-appointment',
  templateUrl: './my-appointment.component.html',
  styleUrls: ['./my-appointment.component.css']
})
export class MyAppointmentComponent implements OnInit {
  appointment:Appointment;
  constructor( private appointmentservice:ApoointmentService) { }

  ngOnInit() {
    this.appointmentservice.findAll().subscribe(data=>{this.appointment=data});
  }

}
