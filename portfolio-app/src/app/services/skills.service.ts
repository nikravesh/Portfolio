import { Injectable } from '@angular/core';
import { SkillCategory } from '../skills/interfaces/skill-interface';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  getSkillsWithCategory(): SkillCategory[] {
    return [
      {
        category: 'Frameworks',
        skills: [
          {
            name: '.NET - .Net Core',
            color: this.coloredSkillsByExprience(90),
            level: 90,
          },

          {
            name: 'Entity Framework - EF Core',
            color: this.coloredSkillsByExprience(90),
            level: 90,
          },
          {
            name: 'Angular',
            color: this.coloredSkillsByExprience(60),
            level: 60,
          },
          {
            name: 'Tailwind',
            color: this.coloredSkillsByExprience(45),
            level: 45,
          },
        ],
      },
      {
        category: 'Languages',
        skills: [
          {
            name: 'C#',
            color: this.coloredSkillsByExprience(90),
            level: 90,
          },
          {
            name: 'TypeScript',
            color: this.coloredSkillsByExprience(50),
            level: 50,
          },
          {
            name: 'JavaScript',
            color: this.coloredSkillsByExprience(25),
            level: 25,
          },
        ],
      },
      {
        category: 'Frontend',
        skills: [
          {
            name: 'HTML',
            color: this.coloredSkillsByExprience(80),
            level: 80,
          },
          { name: 'CSS', color: this.coloredSkillsByExprience(60), level: 60 },
          {
            name: 'SCSS',
            color: this.coloredSkillsByExprience(40),
            level: 40,
          },
        ],
      },
      {
        category: 'Database',
        skills: [
          {
            name: 'SQL Server',
            color: this.coloredSkillsByExprience(65),
            level: 65,
          },
          {
            name: 'MySQL',
            color: this.coloredSkillsByExprience(65),
            level: 65,
          },
          {
            name: 'SQLite',
            color: this.coloredSkillsByExprience(30),
            level: 30,
          },
          {
            name: 'Redis',
            color: this.coloredSkillsByExprience(10),
            level: 10,
          },
        ],
      },
      {
        category: 'Tools',
        skills: [
          { name: 'Git', color: this.coloredSkillsByExprience(70), level: 70 },
          {
            name: 'RabbitMQ',
            color: this.coloredSkillsByExprience(70),
            level: 70,
          },
          {
            name: 'Azure DevOps',
            color: this.coloredSkillsByExprience(40),
            level: 40,
          },
          {
            name: 'Docker',
            color: this.coloredSkillsByExprience(30),
            level: 30,
          },
        ],
      },
      {
        category: 'More',
        skills: [
          {
            name: 'CQRS',
            color: this.coloredSkillsByExprience(90),
            level: 90,
          },
          {
            name: 'OAuth 2.0',
            color: this.coloredSkillsByExprience(80),
            level: 80,
          },
          {
            name: 'Domain Driven Design (DDD)',
            color: this.coloredSkillsByExprience(70),
            level: 70,
          },

          {
            name: 'XUnit (Test)',
            color: this.coloredSkillsByExprience(70),
            level: 70,
          },
          {
            name: 'Microservice',
            color: this.coloredSkillsByExprience(30),
            level: 30,
          },
        ],
      },
    ];
  }

  private coloredSkillsByExprience(level: number): string {
    if (level <= 30) {
      return 'bg-yellow-400';
    } else if (level <= 60) {
      return 'bg-orange-400';
    } else {
      return 'bg-green-500';
    }
  }
}
