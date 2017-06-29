import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {LoginComponent} from './login.component';

import 'rxjs/add/operator/toPromise';

//Import RxJs methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class LoginService {
	//Resolve HTTP
  constructor(private http: Http){}
 
  //private instance that holds the base url
  private loginUrl = 'http://127.0.0.1:5000/v1/auth/login';


  loginUser (body: Object): Observable<any> {
    // console.log(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.loginUrl, body, {headers: this.getHeaders()}).map(response => {
          return response = response.json() 
        });// ...using post request                 
    } 

    private getHeaders(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      return headers;
    }  
  }
  