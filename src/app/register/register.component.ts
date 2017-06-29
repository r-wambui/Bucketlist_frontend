import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdSnackBar, MdSnackBarConfig, MdSnackBarRef} from '@angular/material';
import { NotificationsService } from 'angular2-notifications';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:FormGroup;

  constructor(private registerService: RegisterService, private router: Router,
   private snackbar: MdSnackBar,  private service: NotificationsService) {}

  ngOnInit() {
      this.user = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(2)]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)])})
  }

  onSubmit(user) {
    let data = {
      username: this.user.get('username').value,
      password: this.user.get('password').value
    }
    let response = this.registerService.postUser(data).toPromise().then((user) => {
     this.service.success(
          'Message', 
         ' You logged in successfully'!,
         {
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
          maxLength: 50
         })
    this.router.navigate(['/login']);
    
  }).catch((error) => {
      
    });
  }
}