import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'indicator-selector',
  templateUrl: './app/indicator/indicator.component.html',
  styleUrls: ['../../assets/css/indicators.css']
})

export class IndicatorComponent implements OnInit {
  constructor() {}
  score: string;
  iconPath: string;

  ngOnInit(): void {}
}
