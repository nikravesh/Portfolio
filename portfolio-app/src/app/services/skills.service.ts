import { Injectable } from '@angular/core';
import { SkillCategory } from '../skills/interfaces/skill-interface';

@Injectable({
  providedIn: 'root',
})
export class SkillService {

    getSkillsWithCategory():SkillCategory[] {
        return [
            {
              category: 'Frameworks',
              skills: [
                { name: 'Angular', color: 'bg-red-500', level: 50 },
                { name: 'React', color: 'bg-blue-500', level: 20 },
                { name: 'Vue.js', color: 'bg-green-500', level: 10 },
              ],
            },
            {
              category: 'Backend',
              skills: [
                { name: 'Node.js', color: 'bg-green-700', level: 10 },
                { name: '.NET Core', color: 'bg-blue-700', level: 60 },
                { name: 'Express', color: 'bg-gray-700', level: 10 },
              ],
            },
            {
              category: 'Frontend',
              skills: [
                { name: 'HTML5', color: 'bg-orange-500', level: 80 },
                { name: 'CSS3', color: 'bg-blue-300', level: 60 },
                { name: 'Tailwind CSS', color: 'bg-teal-400', level: 40 },
              ],
            },
            {
              category: 'Tools',
              skills: [
                { name: 'Git', color: 'bg-purple-600', level: 65 },
                { name: 'Docker', color: 'bg-blue-600', level: 30 },
                { name: 'Jenkins', color: 'bg-red-600', level: 10 },
              ],
            },
          ];   
    }  
}
