import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.experiences = [
      {
        company: 'Dotin Co. Ltd',
        description: [
          '•	Maintained a corporate banking application and redesigned it using C#, Entity Framework, Hangfire, SQL Server, Domain-Driven Design (DDD) principles, resulting in a 30% improvement in application speed.',
          '•	Optimized system performance while ensuring scalability and maintainability.•	Engineered a robust reporting solution for banks to produce precise PDF and Excel reports on customer loan balances and outstanding debts, leveraging C#, SQL Server, SQRS, and Stimulsoft.',
          '•	Significantly accelerated the generation of large-scale bank reports from days to hours, resulting in a 45% increase in reporting efficiency.',
        ],
        period: '2022 – Present',
        color: 'border-red-600 bg-red-600',
      },
    ];
  }
}
