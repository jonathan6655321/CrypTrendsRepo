import {Component, OnInit} from '@angular/core';
import {IndicatorComponent} from '../indicator/indicator.component';
import {BitcoinPriceService} from './bitcoin-price.service';


@Component({
  selector: 'bitcoin-price',
  templateUrl: './app/indicator/indicator.component.html',
  styleUrls: ['../../assets/css/indicators.css']
})

export class BitcoinPriceComponent extends IndicatorComponent implements OnInit{
  constructor(
    private bitCoinPriceService: BitcoinPriceService,
  ) {
    super();
  }
  iconPath = '../../assets/img/bitcoin-icon.svg';

  ngOnInit(): void {
    this.score = '$ ' + this.bitCoinPriceService.getBitcoinPrice().toString();
  }
}
