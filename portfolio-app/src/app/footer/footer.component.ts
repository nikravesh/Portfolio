import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  myName = 'Alireza Nikravesh';
  myEmailAddress = 'mailto:a.z.nikravesh@gmail.com';
  myLinkedInProfile = 'https://www.linkedin.com/in/alireza-nikravesh';
}
