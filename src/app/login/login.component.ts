import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:FormGroup;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
      this.user = new FormGroup({
        username: new FormControl('', [Validators.required ]),
        password: new FormControl('', [Validators.required ])})
  }

  onSubmit(user) {
    let data = {
      username: this.user.get('username').value,
      password: this.user.get('password').value
    }
    let response = this.loginService.loginUser(data).toPromise().then((user) => {
    this.router.navigate(['/bucketlist']);
  }).catch((error) => {
      console.log('there was an error');
    });
 }
}