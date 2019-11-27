import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor';
import { Branch } from '../model/branch';
import { Specialist } from '../model/specialist';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class ApoointmentService {

 
  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:1234/api/appointment';
  }
  public findAll(): Observable< Appointment[]> {
    return this.http.get< Appointment[]>(this.usersUrl);
  }

  public save(user: Appointment) {
    return this.http.post<Appointment>(this.usersUrl, user);
  }
  
  
}
