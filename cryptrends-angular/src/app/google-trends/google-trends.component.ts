import {Component, OnInit} from '@angular/core';
import {GoogleTrendsService} from './google-trends.service';
import {IndicatorComponent} from '../indicator/indicator.component';


@Component({
  selector: 'google-trends',
  templateUrl: './app/indicator/indicator.component.html',
  styleUrls: ['../../assets/css/indicators.css']
})

export class GoogleTrendsComponent extends IndicatorComponent implements OnInit {
  constructor(private googleTrendsService: GoogleTrendsService ) {
    super();
  }

  iconPath = '../../assets/img/google-icon.svg';
  ngOnInit(): void {
    this.googleTrendsService.getPercentageDiff()
      .then(data => this.score = data.toString() + '%');
  }
}
