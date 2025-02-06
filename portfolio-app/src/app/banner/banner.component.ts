import { Component, OnInit } from '@angular/core';
import { TypewriterService } from '../services/typewriter.service';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [AsyncPipe],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit {
  titles = [
    "I'm a Full-Stack Developer",
    "I'm a Software Engineer",
    'I Love Workout and Swimming',
  ];

  typedText!: Observable<string>;

  constructor(private typewriterService: TypewriterService) {}

  ngOnInit(): void {
    this.typedText = this.typewriterService
      .getTypewriterEffect(this.titles)
      .pipe(map((text) => text));
  }
}
