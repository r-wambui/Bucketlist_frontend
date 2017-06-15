import { Component } from '@angular/core';
import {RegisterService} from './register/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RegisterService]
})
export class AppComponent {
	pageTitle: string = "Bucket list" 
}
