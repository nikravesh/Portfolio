import { Component, OnInit } from '@angular/core';
import { ExprienceComponent } from './exprience/exprience.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FooterComponent } from "../footer/footer.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-about',
  imports: [ExprienceComponent, AboutmeComponent, FooterComponent, NavBarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
