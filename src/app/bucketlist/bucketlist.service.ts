// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {BucketlistComponent} from './bucketlist.component';
//Import RxJs methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


 @Injectable()
export class BucketlistService {
	//Resolve HTTP
  constructor(private http: Http){}
 
  //private instance that holds the base url
  private bucketlistUrl = 'http://127.0.0.1:5000/v1/bucketlists/1';


  // Fetch all existing bucketlists
  getBucketlist() : Observable<BucketlistComponent[]> {
  		let headers      = new Headers({ 'Content-Type': 'application/json' }); 
        let options       = new RequestOptions({ headers: headers }); 

  			
         return this.http.get(this.bucketlistUrl)

                         .map(res => res.json())

                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
 }