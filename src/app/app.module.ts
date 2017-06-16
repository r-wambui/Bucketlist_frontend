import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { routing } from './routes';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import {BucketlistComponent} from './bucketlist/bucketlist.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

//services
import { RegisterService } from './register/register.service';
import { LoginService } from './login/login.service';
import { BucketlistService } from './bucketlist/bucketlist.service'


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
   
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [RegisterService, LoginService, BucketlistService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
