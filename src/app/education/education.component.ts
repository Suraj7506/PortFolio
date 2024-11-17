import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'Sies College Of Arts,Science and Commerce',
      course: 'BSc Information technology',
      duration: '2019-2022',
      score: '7.8 CGPA',
    },
    {
      institute: 'Guru Nanak College Of Arts,Science and Commerce',
      course: 'HSC',
      duration: '2017-2018',
      score: '72%',
    },
    {
      institute: 'Guru Nanak High School',
      course: 'SSC',
      duration: '2016-2017',
      score: '71%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
