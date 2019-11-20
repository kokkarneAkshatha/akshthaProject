import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-otpform',
  templateUrl: './otpform.component.html',
  styleUrls: ['./otpform.component.css']
})
export class OtpformComponent implements OnInit {

  otpForm: FormGroup;
  submitted = false;
  constructor() { 
    this.otpForm = new FormGroup({
      phone: new FormControl(''),
    otp: new FormControl(''),
  
});
}
  ngOnInit() {
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
    
  

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
       if (this.otpForm.invalid) {
           return;
       }
   
       // display form values on success
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.otpForm.value, null, 4));
  }
}

