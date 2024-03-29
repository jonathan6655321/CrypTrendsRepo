import {Component, OnInit} from '@angular/core';
import {IndicatorComponent} from '../indicator/indicator.component';
import {CryptrendsScoreService} from './cryptrends-score.service';


@Component({
  selector: 'cryptrends-score',
  templateUrl: '../indicator/indicator.component.html',
  styleUrls: ['../../assets/css/indicators.css']
})

export class CryptrendsScoreComponent extends IndicatorComponent implements OnInit{
  constructor(
    private cryptendsScoreService: CryptrendsScoreService,
  ) {
    super();
  }
  iconPath = '../../assets/img/cryptrends-icon.svg';

  ngOnInit(): void {
    this.cryptendsScoreService.getCryptrendsScore()
      .then(data => this.score = data.toString())
  }
}
