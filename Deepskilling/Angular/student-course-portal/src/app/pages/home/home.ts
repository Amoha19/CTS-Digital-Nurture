import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  // Step 11
  portalName = 'Student Course Portal';

  // Step 12
  isPortalActive = true;

  // Step 13
  message = '';

  // Step 14
  searchTerm = '';

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

}