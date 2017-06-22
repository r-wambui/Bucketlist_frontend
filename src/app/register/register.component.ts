import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:FormGroup;

  constructor(private registerService: RegisterService, private router: Router) {}

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
    this.router.navigate(['/bucketlist']);
  }).catch((error) => {
      console.log('there was an error');
    });
  }
}