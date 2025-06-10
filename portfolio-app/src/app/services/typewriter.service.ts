
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TypewriterService {
  private textIndex = 0;
  private charIndex = 0;
  private typingSpeed = 100;
  private erasingSpeed = 50;
  private delayBetween = 2000;

  displayText$ = new BehaviorSubject<string>('');

  aboutTexts = [
    'Software Developer.',
    '.Net Enthusiast.',
    'Problem Solver.',
    'Angular & .NET Specialist.',
  ];

  constructor() { }

  typeEffect() {
    this.startTyping();
  }

  private startTyping() {
    if (this.charIndex < this.aboutTexts[this.textIndex].length) {
      const current = this.displayText$.value;
      this.displayText$.next(current + this.aboutTexts[this.textIndex].charAt(this.charIndex));
      this.charIndex++;
      setTimeout(() => this.startTyping(), this.typingSpeed);
    } else {
      setTimeout(() => this.startErasing(), this.delayBetween);
    }
  }

  private startErasing() {
    if (this.charIndex > 0) {
      const current = this.displayText$.value;
      this.displayText$.next(current.substring(0, current.length - 1));
      this.charIndex--;
      setTimeout(() => this.startErasing(), this.erasingSpeed);
    } else {
      this.textIndex = (this.textIndex + 1) % this.aboutTexts.length;
      setTimeout(() => this.startTyping(), this.typingSpeed);
    }
  }
}
