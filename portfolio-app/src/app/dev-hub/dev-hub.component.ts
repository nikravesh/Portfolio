import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-dev-hub',
  imports: [NavBarComponent],
  templateUrl: './dev-hub.component.html',
  styleUrl: './dev-hub.component.scss',
})
export class DevHubComponent {
  articles = [
    {
      image: '',
      title: 'Getting Started with WebAssembly',
      tags: ['WebAssembly', 'Performance'],
      author: 'Alireza',
      link: '',
    },
    {
      image: '',
      title: 'Intro to Machine Learning with .NET',
      tags: ['Machine Learning', '.NET'],
      author: 'Alireza',
      link: '',
    },
  ];
}
