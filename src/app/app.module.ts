import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2PaginationModule} from 'ng2-pagination'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { routing } from './routes';
import { MomentModule } from 'angular2-moment';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlashMessagesModule } from 'angular2-flash-messages';


//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import {BucketlistComponent} from './bucketlist/bucketlist.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component'



//services
import { RegisterService } from './register/register.service';
import { LoginService } from './login/login.service';
import { BucketlistService } from './bucketlist/bucketlist.service';
import { ItemService } from './items/item.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    BucketlistComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    ItemsComponent,
   
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    routing,
    Ng2PaginationModule,
    MomentModule,
    FlashMessagesModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [RegisterService, LoginService, BucketlistService, ItemService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
