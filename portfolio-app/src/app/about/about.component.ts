import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { AboutmeComponent } from "./aboutme/aboutme.component";

@Component({
  selector: 'app-about',
  imports: [NavBarComponent, AboutmeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent { }
