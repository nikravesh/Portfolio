import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { MailServiceType } from '../contact-us/interfaces/mail-servicetype';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  sendMail(event: Event, formData: MailServiceType) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    debugger;

    emailjs
      .sendForm(
        environment.emailServiceId,
        environment.emailTemplateId,
        form,
        environment.emailPublicKey
      )
      .then(
        () => {
          alert('Message sent successfully!');
          debugger;
          emailjs
            .sendForm(
              environment.emailServiceId,
              environment.autoReplyTemplateId,
              form,
              environment.emailPublicKey
            )
            .then(
              () => {},
              (error) => {
                console.error(error);
              }
            );
          form.reset();
          formData = { name: '', email: '', message: '' };
        },
        (error) => {
          alert('Failed to send the message, please try again.');
          console.error(error);
        }
      );
  }
}
