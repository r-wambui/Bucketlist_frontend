import { Component, OnInit } from '@angular/core';
import { BucketlistService } from './bucketlist.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {

  bucketlists: BucketlistComponent[];
  bucketlist:FormGroup
  edit: boolean =false;
  name;
  
  constructor(private BucketlistService:BucketlistService, private router:Router) {}

  ngOnInit() {
    this.loadBuckets();  
    this.bucketlist = new FormGroup({
        name: new FormControl('', [Validators.required])})
    console.log(localStorage.getItem('Authorization'));
  	
  }

  loadBuckets() {
  	this.BucketlistService.getBucketlist().toPromise().then((bucketlists) => {
  		this.bucketlists=bucketlists;
  		console.log(bucketlists); // not null
    })
}
  onAdd(name) {
    let data = {
      name: this.bucketlist.get('name').value,
    }
    
    let response = this.BucketlistService.addBucketlist(data).subscribe(response =>{
      this.bucketlist=name
      this.loadBuckets()
  
    });
  }
  onUpdate(bucketlist_id, name){
    console.log(name)
    
    
      let response = this.BucketlistService.editBucketlist(bucketlist_id, name).subscribe(response => {
       this.loadBuckets()
         })

     

  }
  onDelete(bucketlist_id){
     let response = this.BucketlistService.deleteBucketlist(bucketlist_id).toPromise().then((bucketlist) => {
      this.loadBuckets()
        console.log(name)
  }).catch((error) => {
      console.log('there was an error');
    });
  }
  viewItems(bucketlist_id){
    this.router.navigate(['/items'], {queryParams:{bucketlist_id:bucketlist_id}})
  	
  }
  onSearch(){
     if (this.name){
      let response = this.BucketlistService.searchBucket(this.name).subscribe(response => {
        console.log(response);
        this.bucketlists = response
        console.log(this.bucketlists);
      
      });
  }
  }
}


 
