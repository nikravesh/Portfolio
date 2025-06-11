import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  myName = 'Alireza Nikravesh';
  myEmailAddress = 'mailto:a.z.nikravesh@gmail.com';
  myLinkedInProfile = 'https://www.linkedin.com/in/alireza-nikravesh';
  gitHubProfile = 'https://github.com/nikravesh';
  currentYear: number = new Date().getFullYear();
}
