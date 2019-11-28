import { Time } from '@angular/common';

export class Appointment {
       id:Number;
	
	
	   date:Date;

	   slot:Time;
	
	doctor_id:Number;
	patient_id:String;
	  isfeepaid: boolean;
}
