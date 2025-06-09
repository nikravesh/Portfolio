import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-banner',
  imports: [FooterComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit {
  myName = 'Alireza Nikravesh';
  aboutTexts = [
    'Software Developer.',
    'Web Enthusiast.',
    'Problem Solver.',
    'Angular & .NET Specialist.',
  ];
  displayText = '';
  private textIndex = 0;
  private charIndex = 0;
  private typingSpeed = 100;
  private erasingSpeed = 50;
  private delayBetween = 2000;

  ngOnInit(): void {
    this.startTyping();
  }

  private startTyping() {
    if (this.charIndex < this.aboutTexts[this.textIndex].length) {
      this.displayText += this.aboutTexts[this.textIndex].charAt(
        this.charIndex
      );
      this.charIndex++;
      setTimeout(() => this.startTyping(), this.typingSpeed);
    } else {
      setTimeout(() => this.startErasing(), this.delayBetween);
    }
  }

  private startErasing() {
    if (this.charIndex > 0) {
      this.displayText = this.aboutTexts[this.textIndex].substring(
        0,
        this.charIndex - 1
      );
      this.charIndex--;
      setTimeout(() => this.startErasing(), this.erasingSpeed);
    } else {
      this.textIndex = (this.textIndex + 1) % this.aboutTexts.length;
      setTimeout(() => this.startTyping(), this.typingSpeed);
    }
  }
}
