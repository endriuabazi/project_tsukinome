import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from './course'
import { courseList } from './mock-mycourse';
import { CourseService } from '../course.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {
  courses = courseList ;
  selectedCourse: Course;
  
  course: Course = {
    id: 1,
    name: 'Angular'
  };
  courseList: Course[];
  

  constructor(private router: Router, private courseService: CourseService , private messageService: MessageService ) { }

  
  ngOnInit() {

    console.log({})
    }


    onSelect(course: Course): void {
      this.selectedCourse = course;
    
    }

    deleteCourse(id:number){
  
      const i = this.courseList.findIndex(e=>e.id===id);
      if (i!==-1){
        this.courseList.splice(i,1);
      }
   }
   

  }







