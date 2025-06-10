import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { TypewriterService } from '../services/typewriter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-banner',
  imports: [FooterComponent, RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit, OnDestroy {
  myName = 'Alireza Nikravesh';
  displayText = '';
  private sub!: Subscription

  constructor(private typewriterService: TypewriterService) { }

  ngOnInit(): void {
    this.typewriterService.typeEffect();
    this.sub = this.typewriterService.displayText$.subscribe(text => {
      this.displayText = text;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
