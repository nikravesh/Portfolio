import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
];
