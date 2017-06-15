// // Imports
// import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import {Observable} from 'rxjs/Rx';
// import 'rxjs/add/operator/toPromise';

// //Import RxJs methods
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';


// @Injectable()
// export class RegisterService {
// 	//Resolve HTTP
//   constructor(private http: Http){}
//   	//private instance that holds the base url
//   	private bucketUrl = 'http://127.0.0.1:5000/v1/auth/login';


//   getData() : Observable<Bucketlist[]> {
//   //   return this.http.get("http://127.0.0.1:5000/v1/auth/login").toPromise();
//   // }
//   // use get request
//   return this.http.get(this.bucketUrl)
//   			// ...call .json() on the response to return data
//   		.map((res:Response) => res.json())
//   		// error handling
//   		 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

// //   postData(data): Promise<any> {
// //     return this.http.post("http://127.0.0.1:5000/v1/auth/register", data).toPromise();
// //   }

// // }// Add a new comment
//   addBucket (body: Object): Observable<Comment[]> {
//         let bodyString = JSON.stringify(body); // Stringify payload
//         let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
//         let options       = new RequestOptions({ headers: headers }); // Create a request option

//         return this.http.post(this.commentsUrl, body, options) // ...using post request
//                          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
//                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
//     }   

//     // Update a comment
//     updateBucket (body: Object): Observable<Comment[]> {
//         let bodyString = JSON.stringify(body); // Stringify payload
//         let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
//         let options       = new RequestOptions({ headers: headers }); // Create a request option

//         return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
//                          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
//                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
//     }   

//     // Delete a comment
//     removeBucket (id:string): Observable<Comment[]> {
//         return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
//                          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
//                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
//     }   
