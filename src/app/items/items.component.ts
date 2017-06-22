import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import {BucketlistService} from '../bucketlist/bucketlist.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'item',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  bucketlist_id:number;
  item_id:number;

  items: ItemsComponent[];
  item:FormGroup
  itemId:number;
  bucketListId:number;

  constructor(private ItemService:ItemService, 
    private router:Router, private route:ActivatedRoute,private bucketlistService: BucketlistService) {}

  ngOnInit() {
    this.loadItems();  
    this.item = new FormGroup({
        name: new FormControl('', [Validators.required])})
    console.log(localStorage.getItem('Authorization'));
    
  }
  setItemId(id){
   this.itemId = id;
  }
  setBucketListId(id){
    this.bucketListId =id;
  }


  loadItems() {
    this.route.queryParams.subscribe(params=>{
      this.bucketlist_id =+params['bucketlist_id'];
      this.bucketlistService.getBucket(this.bucketlist_id).subscribe(
        (response)=>{
          console.log(response.items)
          this.items=response.items
        })
   })
}
  onAddItem(name, bucketlist_id) {
    let response = this.ItemService.addBucketlistItem(name, bucketlist_id).subscribe(response => {
      this.loadItems()
  })
  }
  onUpdate(name){
    
      let response = this.ItemService.editBucketlistItem(this.bucketlist_id, this.itemId, name).subscribe(response => {
       this.loadItems()
      })

  }
  onDelete(bucketlist_id, item_id){
   
     let response = this.ItemService.deleteBucketlistItem(bucketlist_id, item_id).subscribe(response =>{
       this.loadItems()
     })
    
  }
}


 

