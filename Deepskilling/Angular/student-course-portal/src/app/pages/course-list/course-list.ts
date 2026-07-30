import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../services/course';
import { Store } from '@ngrx/store';

import * as CourseActions from '../../store/actions/course.actions';

import * as CourseSelectors from '../../store/selectors/course.selectors';
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

  isLoading: boolean = true;

  courses: any[] = [];

  selectedCourseId: number | null = null;
  constructor(
  private courseService: Course,
  private store: Store
) {}

  ngOnInit(): void {

  console.log("Component Loaded");

  this.store.dispatch(CourseActions.loadCourses());

  this.store.select(CourseSelectors.selectAllCourses)
    .subscribe(courses => {

      this.courses = courses;

      console.log("Courses from Store:", courses);

    });

  this.store.select(CourseSelectors.selectLoading)
    .subscribe(loading => {

      this.isLoading = loading;

    });

}

  // Load all courses
  loadCourses(): void {

    console.log("Component Loaded");

    this.isLoading = true;

    this.courseService.getCoursesUsingSwitchMap().subscribe({

      next: (data) => {

        console.log("API Success");
        console.log(data);

        this.courses = data;

        this.isLoading = false;

      },

      error: (err) => {

        console.error("API Error :", err);

        this.isLoading = false;

      }

    });

  }

  // ---------------- Hands-On 7 ----------------

  onEnroll(courseId: number): void {

    console.log("Parent received :", courseId);

    this.selectedCourseId = courseId;

  }

  // ---------------- Hands-On 8 ----------------

  onEdit(course: any): void {

    const updatedCourse = {
      ...course,
      gradeStatus: 'passed'
    };

    this.courseService.updateCourse(course.id, updatedCourse).subscribe({

      next: () => {

        alert("Course Updated Successfully");

        this.loadCourses();

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  onDelete(courseId: number): void {

    if (confirm("Are you sure you want to delete this course?")) {

      this.courseService.deleteCourse(courseId).subscribe({

        next: () => {

          alert("Course Deleted Successfully");

          this.loadCourses();

        },

        error: (err) => {

          console.error(err);

        }

      });

    }

  }

  trackByCourseId(index: number, course: any): number {

    return course.id;

  }

}