import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Skill } from '../interfaces/skill-interface';

@Component({
  selector: 'app-skill-card',
  imports: [NgClass],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss',
})
export class SkillCardComponent {
  @Input() skill!: Skill;
}
