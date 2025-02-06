import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    this.addBreak();
  }
  title = 'About me';
  myName = "I'm Alireza Nikravesh";
  description =
    "I'm Alireza Nikravsh\nWhen I was child I bought computer and started to play video games, I really enjoyed with it, this subject caused by I like computer and programming, I always thought about these games and how they generated, finally I graduated being a Software enginner who develops any other type of software other than games";

  addBreak() {
    this.description.replace('\n', '<br>');
  }
}
