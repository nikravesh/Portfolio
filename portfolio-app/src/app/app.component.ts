import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from "./banner/banner.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-app';
}
