import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { SkillService } from '../services/skills.service';
import { SkillCategory } from './interfaces/skill-interface';

@Component({
  selector: 'app-skills',
  imports: [SkillCardComponent, NavBarComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [];

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.skillCategories = this.skillService.getSkillsWithCategory();
  }
}
