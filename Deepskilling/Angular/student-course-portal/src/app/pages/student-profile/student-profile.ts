import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile implements OnInit, OnDestroy {

  studentName: string = 'Amoha';

  constructor() {
    console.log('Constructor Called');
  }

  ngOnInit(): void {
    console.log('ngOnInit Called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Called');
  }

}