import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DevHubComponent } from './dev-hub/dev-hub.component';

export const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'dev-hub', component: UnderConstructionComponent },
  { path: 'under-construction', component: UnderConstructionComponent },
  { path: '**', component: NotFoundComponent },
];
