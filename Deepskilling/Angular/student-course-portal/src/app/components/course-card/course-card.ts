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

  @Output()
  enrollRequested = new EventEmitter<number>();
enrollCourse() {
  this.enrollRequested.emit(this.course.id);
}
}