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
          'Maintained a corporate banking application and redesigned it using C#, Entity Framework, Hangfire, SQL Server, Domain-Driven Design (DDD) principles, resulting in a 30% improvement in application speed.',
          'Optimized system performance while ensuring scalability and maintainability.•	Engineered a robust reporting solution for banks to produce precise PDF and Excel reports on customer loan balances and outstanding debts, leveraging C#, SQL Server, SQRS, and Stimulsoft.',
          'Significantly accelerated the generation of large-scale bank reports from days to hours, resulting in a 45% increase in reporting efficiency.',
        ],
        period: '2022 – Present',
        color: 'border-green-600 bg-green-600',
      },
      {
        company: 'TosanTechno Co. Ltd',
        description: [
          'Developed a real-time ATM monitoring system using C#, MySQL, and RabbitMQ that dramatically accelerated troubleshooting by 40%, leading to higher customer satisfaction and a 20% increase in company revenue.',
          'Created an innovative monitoring solution that enabled remote identification of ATM malfunctions, resulting in a 35% faster resolution time and attracting new customers.',
          'Analyzed ATM transaction data using a bank monitoring service to optimize ATM placement and maximize customer usage.',
          'Increased customer adoption led to higher bank profits and a surge in demand from other banks, boosting company sales by 15%.',
        ],
        period: '2018 – 2022',
        color: 'border-yellow-600 bg-red-600',
      },
      {
        company: 'SAAT Co. Ltd',
        description: [
          'Created a high-performance archival system for the Iranian Parliament using C#, Entity Framework, and SQL Server, resulting in a 50% increase in search speed.',
          'Enhanced a complex archival system by implementing robust tagging and metadata management, resulting in a significant 25% increase in search speed and overall user satisfaction.',
          'Generated an automated radio playlist management system using C# and WPF, significantly accelerating the process of adding and preparing audio files for broadcast.',
        ],
        period: '2013 – 2018',
        color: 'border-yellow-600 bg-red-600',
      },
    ];
  }
}
