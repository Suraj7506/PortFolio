import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Suraj Shukla'],
    ['DOB', '20/07/2001'],
    ['Work Exp', '03 Years'],
    ['Education', 'BSC Information Tech. (2022)'],
    ['Interests', 'Cricket'],
  ];

  aboutMe: string[] = [
    'As a passionate Front-End Developer with 3 years of experience, I build dynamic, responsive web applications using Angular (12+), JavaScript, TypeScript, HTML5, CSS3, and SCSS.',
    'Proficient in creating high-performance UIs and integrating RESTful API services.',
    'Skilled in RxJS, Angular Material, and Bootstrap for scalable, optimized solutions.',
    'Experienced with version control systems like Git, GitLab, and GitHub for seamless collaboration.',
    'Familiar with Microsoft SQL Server for front-end and database integration.',
    'Dedicated to clean code and user-centric design, always eager to learn and achieve impactful results.',
  ];
  

  constructor() {}

  ngOnInit(): void {}
}
