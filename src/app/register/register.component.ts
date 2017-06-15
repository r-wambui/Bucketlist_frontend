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

  // getData() {
  // 	this.registerService.getData().then((data) => {
  // 		console.log('you posted successfully');
  // 	}).catch((error) => { console.log('there was an error in your application'); });
  // }

//   postData(data) {
//   	//validate form data

//   	this.registerService.postData(data).then((data) => {
//   		console.log('Account created successfully');
//   	}).catch((error) => {})
//   }

}

// set default authorization header to include token ???/ -. hard 
// enable CORS on back-end FLASK_CORS