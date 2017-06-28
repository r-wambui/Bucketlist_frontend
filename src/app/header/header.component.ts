import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	loggedIn=false;
   
  constructor(private router: Router) { 
  	this.loggedIn = !! localStorage.getItem('Authorization')}

isLoggedIn(){
	return this.loggedIn;
}

  logoutUser(){
 	localStorage.removeItem('Authorization');
 	window.location.reload()
 	this.router.navigate(['/'])
 }


  ngOnInit() {
  }
}

