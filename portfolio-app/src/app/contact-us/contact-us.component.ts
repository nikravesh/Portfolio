import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MailService } from '../services/mail.service';
import { MailServiceType } from './interfaces/mail-servicetype';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NavBarComponent, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnInit {
  myEmail = 'a.z.nikravesh@gmail.com';

  formData!: MailServiceType;

  constructor(private mailService: MailService) {}

  ngOnInit(): void {
    this.formData = {
      name: '',
      email: '',
      message: '',
    };
  }

  sendEmail($event: Event) {
    debugger;
    this.mailService.sendMail($event, this.formData);
  }
}
