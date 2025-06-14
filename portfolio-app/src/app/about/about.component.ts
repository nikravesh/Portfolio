import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { AboutmeComponent } from "./aboutme/aboutme.component";
import { ExperienceComponent } from "./exprience/exprience.component";

@Component({
  selector: 'app-about',
  imports: [NavBarComponent, AboutmeComponent, ExperienceComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent { }
