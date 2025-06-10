import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  myEmail = 'a.z.nikravesh@gmail.com';
}
