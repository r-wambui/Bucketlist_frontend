// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ItemsComponent} from './items.component';
import { Router } from '@angular/router';

//Import RxJs methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


 @Injectable()
export class ItemService {
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
  getBucketlistItems() : Observable<ItemsComponent[]> {
  		
         return this.http.get(this.bucketlistUrl, {"headers":this.headers})

                         .map(response => response.json())

                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
  //Adding a bucketlist item
 addBucketlistItem (name, bucketlist_id){
        const url = `${this.bucketlistUrl}/${bucketlist_id}/item`;
        return this.http.post(url,
         {"name":name}, {"headers":this.headers})
         .map(response => response.json())


         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));                  
    } 
   //update bucketlist item
 editBucketlistItem(bucketlist_id, item_id, name): Observable<ItemsComponent[]>{
   console.log(item_id)

        return this.http.put(this.bucketlistUrl  +"/"+ <string>bucketlist_id +'/item/' +<string>item_id, {name:name},{"headers":this.headers} ) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    } 

deleteBucketlistItem(bucketlist_id, item_id){
       
       return this.http.delete(this.bucketlistUrl  +"/"+ <string>bucketlist_id +'/item/' +<string>item_id,  {"headers":this.headers} ) 
      
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}

 }  
