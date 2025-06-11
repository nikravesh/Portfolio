import { Component } from '@angular/core';
import { SkillItemComponent } from './skill-item/skill-item.component';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-skills',
  imports: [SkillItemComponent, NavBarComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {}
