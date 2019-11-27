import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Login } from '../model/login';
import { PatientregistrationserviceService } from '../service/patientregistrationservice.service';
import { SharedService } from '../shared.service';

import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 isValid:boolean;
  loginForm: FormGroup;
  submitted = false;
  invalidLogin: boolean = false;
  constructor( private router: Router,private userService:PatientregistrationserviceService ,private sharedService: SharedService) {
  this.loginForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

}
ngOnInit()
{
  
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
}
get f() { return this.loginForm.controls; }
onSubmit(model: Login) {
  this.submitted = true;
// stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }
  // else{
  // var temp= this.userService.authentication(this.sharedService.login).subscribe()
  // console.log(temp)
    
  

  // }
  // display form values on success
  //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
}
validlogin()
{
  this.router.navigate(['dashboard'])
}


}
