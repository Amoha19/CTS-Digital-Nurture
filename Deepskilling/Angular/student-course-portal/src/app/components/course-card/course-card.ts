import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    Highlight
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input()
  course: any;

  // ---------------- Hands-On 7 ----------------

  @Output()
  enrollRequested = new EventEmitter<number>();

  enrollCourse() {
    this.enrollRequested.emit(this.course.id);
  }

  // ---------------- Hands-On 8 ----------------

  @Output()
  editRequested = new EventEmitter<any>();

  @Output()
  deleteRequested = new EventEmitter<number>();

  editCourse() {
    this.editRequested.emit(this.course);
  }

  deleteCourse() {
    this.deleteRequested.emit(this.course.id);
  }

}