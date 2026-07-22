import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../services/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses: any[] = [];

  selectedCourseId: number | null = null;

  // Dependency Injection
  constructor(private courseService: Course) {}

 ngOnInit(): void {

  this.isLoading = true;

  setTimeout(() => {

    this.courses = this.courseService.getCourses();

    this.isLoading = false;

    console.log(this.courses);

  }, 1500);

}

  onEnroll(courseId: number) {
    console.log("Parent received:", courseId);
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: any) {
    return course.id;
  }

}