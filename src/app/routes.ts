import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {BucketlistComponent} from './bucketlist/bucketlist.component';
import { ItemsComponent} from './items/items.component';


import {LoginComponent} from './login/login.component';



const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bucketlist', component: BucketlistComponent },
  { path: 'login', component:LoginComponent},
  { path: 'items', component:ItemsComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
