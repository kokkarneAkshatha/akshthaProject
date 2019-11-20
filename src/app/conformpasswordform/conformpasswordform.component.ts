import { Component, OnInit } from '@angular/core';
import {User } from '../password';
@Component({
  moduleId: module.id,
  selector: 'app-conformpasswordform',
  templateUrl: './conformpasswordform.component.html',
  styleUrls: ['./conformpasswordform.component.css']
})
export class ConformpasswordformComponent implements OnInit {

  public user: User;
  
  ngOnInit() {
    this.user = {
      password: '',
      confirmPassword: ''
    }
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }
}

