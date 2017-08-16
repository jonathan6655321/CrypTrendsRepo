import { Injectable } from '@angular/core';
import {GoogleTrendsService} from '../google-trends/google-trends.service';

@Injectable()
export class CryptrendsScoreService {
  constructor(
    private googleTrendsService: GoogleTrendsService,
  ) {}

  getCryptrendsScore(): Promise<number> {
    return  this.googleTrendsService.getPercentageDiff()
      .then(response => (response / 200 ) * 10 );
  }
}
