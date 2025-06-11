import { Component, Input } from '@angular/core';
import { Skill } from '../skills.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-skill-card',
  imports: [NgClass],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss',
})
export class SkillCardComponent {
  @Input() skill!: Skill;
}
