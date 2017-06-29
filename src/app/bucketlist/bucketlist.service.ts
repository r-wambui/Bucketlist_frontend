// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {BucketlistComponent} from './bucketlist.component';
import { Router } from '@angular/router';

//Import RxJs methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


 @Injectable()
export class BucketlistService {
  token: any = JSON.parse(localStorage.getItem("user"));
  private bucketlistUrl = 'http://127.0.0.1:5000/v1/bucketlists';

  headers:any;
	//Resolve HTTP
  constructor(private http: Http, private router: Router){
    this.headers = new Headers();
    this.token = localStorage.getItem('Authorization');
    if(this.token ==null){
      this.router.navigateByUrl("/login");
    }
    
      let token = this.token;
       this.headers.append('Authorization', token);
       this.headers.append('Access-Control-Allow-Origin', "*");
 }
  
  // Fetch all existing bucketlists
  getBucketlist() : Observable<BucketlistComponent[]> {
  		
         return this.http.get(this.bucketlistUrl, {"headers":this.headers})

                         .map(response => response.json())

                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
 addBucketlist (body: Object): Observable<any> {
        return this.http.post(this.bucketlistUrl, body, {"headers":this.headers})
         .map(response => response.json())

         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));                  
    } 
 editBucketlist(bucketlist_id, name): Observable<BucketlistComponent[]>{

  
        return this.http.put(this.bucketlistUrl  +"/"+ <string>bucketlist_id, {name:name},{"headers":this.headers} ) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    } 
deleteBucketlist(bucketlist_id){
       
       return this.http.delete(this.bucketlistUrl  +"/"+ <string>bucketlist_id, {"headers":this.headers} ) 
       
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}
getBucket(bucket_id){
  return this.http.get(this.bucketlistUrl  +"/"+ <string>bucket_id, {"headers":this.headers})

                         .map(response => response.json())

                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}
searchBucket(name){
  return this.http.get(this.bucketlistUrl  + '?q=' + <string>name, {"headers":this.headers})

                         .map(response => response.json())

                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}

 }  
