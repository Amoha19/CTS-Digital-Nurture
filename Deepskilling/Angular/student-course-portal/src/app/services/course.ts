import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, retry, tap, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Course {

  constructor(private http: HttpClient) {}

  // ---------------- Hands-On 6 ----------------

  private courses = [

    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 4,
      gradeStatus: 'pending'
    },
    {
      id: 3,
      name: 'Python',
      code: 'PY301',
      credits: 2,
      gradeStatus: 'failed'
    },
    {
      id: 4,
      name: 'Spring Boot',
      code: 'SB401',
      credits: 5,
      gradeStatus: 'passed'
    },
    {
      id: 5,
      name: 'SQL',
      code: 'SQL101',
      credits: 3,
      gradeStatus: 'pending'
    }

  ];

  getCourses() {
    return this.courses;
  }

  // ---------------- Hands-On 8 ----------------

  private apiUrl = 'http://localhost:3000/courses';

  getCoursesFromApi(): Observable<any[]> {

    return this.http.get<any[]>(this.apiUrl).pipe(

      retry(2),

      tap(() => console.log("HTTP GET Executed")),

      map(courses => courses),

      catchError(this.handleError)

    );

  }

  addCourse(course: any): Observable<any> {

    return this.http.post(this.apiUrl, course).pipe(

      tap(() => console.log("Course Added")),

      catchError(this.handleError)

    );

  }

  updateCourse(id: number, course: any): Observable<any> {

    return this.http.put(`${this.apiUrl}/${id}`, course).pipe(

      tap(() => console.log("Course Updated")),

      catchError(this.handleError)

    );

  }

  deleteCourse(id: number): Observable<any> {

    return this.http.delete(`${this.apiUrl}/${id}`).pipe(

      tap(() => console.log("Course Deleted")),

      catchError(this.handleError)

    );

  }
  getCoursesUsingSwitchMap(): Observable<any[]> {

  return of(this.apiUrl).pipe(

    switchMap(url => this.http.get<any[]>(url)),

    tap(() => console.log("switchMap Executed")),

    catchError(this.handleError)

  );

}

  private handleError(error: any) {

    console.error("HTTP Error :", error);

    return throwError(() => error);

  }

}