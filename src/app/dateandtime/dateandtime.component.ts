import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApoointmentService } from '../service/apoointment.service';
@Component({
  selector: 'app-dateandtime',
  templateUrl: './dateandtime.component.html',
  styleUrls: ['./dateandtime.component.css']
})
export class DateandtimeComponent implements OnInit {
  dateandtime:FormGroup
  constructor(private router:Router,private sharedService: SharedService,private appointmentservice:ApoointmentService) {
    this.dateandtime = new FormGroup({
      date: new FormControl('', [Validators.required]),
     slot: new FormControl('', [Validators.required])
    });
   }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.sharedService.appointment.date);
    console.log(this.sharedService.appointment.slot);
    this.sharedService.appointment.patient_id=1;
    console.log(this.sharedService.appointment)
    this.appointmentservice.save(this.sharedService.appointment).subscribe();
    this.router.navigate(['payment'])
  }

}
