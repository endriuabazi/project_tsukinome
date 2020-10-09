import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Course } from './mycourses/course'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const courses = [
      { id: 1, name: 'Angular'  },
  { id: 2, name: 'JS' },
  { id: 3, name: 'Python' },
  { id: 4, name: 'Html' },
  { id: 5, name: 'Angularjs' },
  { id: 6, name: 'Ajax' },
  { id: 7, name: 'C++' },
  { id: 8, name: 'JQuery' },
  { id: 9, name: 'PHP' },
    ];
    return {courses};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(courses: Course[]): number {
    return courses.length > 0 ? Math.max(...courses.map(courses => courses.id)) + 1 : 11;
  }
}