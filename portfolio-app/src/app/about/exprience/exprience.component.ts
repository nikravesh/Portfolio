import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/exprience.service';
import { Experience } from './interfaces/exprience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgClass],
  templateUrl: './exprience.component.html',
  styleUrl: './exprience.component.scss',
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private exprienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experiences = this.exprienceService.getExprience();
  }
}
