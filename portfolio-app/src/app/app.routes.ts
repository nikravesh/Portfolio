import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';

export const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'about', component: AboutComponent },
];
