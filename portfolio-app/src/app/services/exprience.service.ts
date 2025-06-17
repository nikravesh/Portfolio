import { Injectable } from '@angular/core';
import { Experience } from '../about/exprience/interfaces/exprience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  getExprience(): Experience[] {
    return [
      {
        company: 'Dotin Co. Ltd',
        description: [
          `I've been developing, maintaing, optimizing bunch of banking web application, services and APIs! Redesigned it using C#, Entity Framework, Dapper, Hangfire, SQL Server, Domain-Driven Design (DDD) principle.`,
        ],
        period: '2022 – Present',
        color: 'border-green-600 bg-green-600',
      },
      {
        company: 'TosanTechno Co. Ltd',
        description: [
          'Developed a real-time ATM monitoring system using C#, MySQL, and RabbitMQ, that an innovative monitoring solution that enabled remote identification of ATM malfunctions.',
        ],
        period: '2018 – 2022',
        color: 'border-yellow-600 bg-red-600',
      },
      {
        company: 'SAAT Co. Ltd',
        description: [
          'Created a high-performance archival system using C#, Entity Framework, and SQL Server. Enhanced a complex archival system by implementing robust tagging and metadata management',
          'Generated an automated radio playlist management system using C# and WPF, significantly accelerating the process of adding and preparing audio files for broadcast.',
        ],
        period: '2013 – 2018',
        color: 'border-yellow-600 bg-red-600',
      },
    ];
  }
}
