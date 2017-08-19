import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';


import {GoogleTrendsComponent} from './google-trends/google-trends.component';
import {GoogleTrendsService} from './google-trends/google-trends.service';

import {BitcoinPriceComponent} from './bitcoin-price/bitcoin-price.component';
import {BitcoinPriceService} from './bitcoin-price/bitcoin-price.service';

import {CryptrendsScoreComponent} from './cryptrends-score/cryptrends-score.component';
import {CryptrendsScoreService} from './cryptrends-score/cryptrends-score.service';

import {IndicatorComponent} from './indicator/indicator.component';

import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    IndicatorComponent,
    GoogleTrendsComponent,
    BitcoinPriceComponent,
    CryptrendsScoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    GoogleTrendsService,
    BitcoinPriceService,
    CryptrendsScoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
