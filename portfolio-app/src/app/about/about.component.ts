import { Component, OnInit } from '@angular/core';
import { ExprienceComponent } from './exprience/exprience.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@Component({
  selector: 'app-about',
  imports: [ExprienceComponent, AboutmeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
