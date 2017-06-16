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

  constructor(private BucketlistService:BucketlistService) {}

  ngOnInit() {
  	this.loadBuckets();
      
  }

  loadBuckets() {
  	this.BucketlistService.getBucketlist().toPromise().then((bucketlists) => {
  		this.bucketlists=bucketlists;
  		console.log(this.bucketlists); // not null
    })
}
  

  	
  }



  