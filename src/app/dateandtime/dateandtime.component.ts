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
  istrue:boolean
  dateandtime:FormGroup
  constructor(private router:Router,private sharedService: SharedService,private appointmentservice:ApoointmentService) {
    this.dateandtime = new FormGroup({
      date: new FormControl('', [Validators.required]),
     slot: new FormControl('', [Validators.required])
    });
   }

  ngOnInit() {
    this.istrue=false;
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("txtDate")[0].setAttribute('min', today);
    var someDate = new Date();
  var numberOfDaysToAdd = 10;
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
  document.getElementsByName("txtDate")[0].setAttribute('max', someDate.toISOString().split('T')[0]);
  }
  onSubmit(){
    this.istrue=true;
   
    //this.router.navigate(['payment'])
  }
  savevalue(){

    console.log(this.sharedService.appointment.date);
    console.log(this.sharedService.appointment.slot);
    this.sharedService.appointment.patient_id="QF6OJE";
    this.sharedService.appointment.isfeepaid=false;

    console.log(this.sharedService.appointment)
    this.appointmentservice.save(this.sharedService.appointment).subscribe();
  }
  onlinesave(){
    
    this.router.navigate(['payment'])
  }

}
