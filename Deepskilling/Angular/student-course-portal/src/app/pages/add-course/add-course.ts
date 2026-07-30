import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Course } from '../../services/course';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './add-course.html',
  styleUrl: './add-course.css'
})
export class AddCourse {

  course = {
    name: '',
    code: '',
    credits: 0,
    gradeStatus: 'pending'
  };

  successMessage = '';

  constructor(private courseService: Course) {}

  addCourse() {

    this.courseService.addCourse(this.course).subscribe({

      next: (response) => {

        console.log("Course Added Successfully");
        console.log(response);

        this.successMessage = "Course Added Successfully!";

        this.course = {
          name: '',
          code: '',
          credits: 0,
          gradeStatus: 'pending'
        };

      },

      error: (error) => {

        console.error("Error:", error);

      }

    });

  }

}