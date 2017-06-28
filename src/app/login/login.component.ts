import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:FormGroup;

  constructor(private loginService: LoginService, private router: Router,
    private service: NotificationsService) {}
  message: any= ''
  authorization: any=''



  ngOnInit() {
      this.user = new FormGroup({
        username: new FormControl('', [Validators.required ]),
        password: new FormControl('', [Validators.required ])})
  }

  onSubmit(user) {
    let data = {
      username: this.user.get('username').value,
      password: this.user.get('password').value,
    
    }
    this.loginService.loginUser(data)
    .subscribe(response => {
       console.log(response);
      this.message = response.message
      // console.log(this.message);
      this.authorization = response.Authorization

      if(this.authorization != null) {
        this.router.navigate(['/bucketlist'])
        localStorage.setItem('Authorization', this.authorization)
        localStorage.setItem('username', data.username)
        

        
      }

        
 
})
    
}
}
