import {  Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from './mycourses/course'
import { MessageService } from './message.service';
import { courseList } from './mycourses/mock-mycourse';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesUrl = 'api/courses';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  private messageService: MessageService
    
    
    
    ){} }