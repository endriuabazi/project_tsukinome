import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { NavComponent } from './nav/nav.component';
import{AuthguardGuard} from './authguard.guard'
import{UserService} from './user.service'
import { from } from 'rxjs';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
const appRoutes: Routes = [
  {


    path: ''
    , component: LoginFormComponent
  },

  {

    path: 'dashboard',
    canActivate:[AuthguardGuard],
    component: DashboardComponent


  },


  {

    path: 'register',
    component: RegisterFormComponent


  },

  {

    path: 'mycourses',
    component: MycoursesComponent


  },
  {
    path: 'createcourses',
    component: CreatecourseComponent


  }
]







@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
   
    DashboardComponent,
    RegisterFormComponent,
    MycoursesComponent,
    CreatecourseComponent,
    NavComponent,
    CourseDetailComponent,
    MessagesComponent,
   


  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    AuthguardGuard,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
