import { Injectable } from '@angular/core';
import {GoogleTrendsService} from '../google-trends/google-trends.service';

@Injectable()
export class CryptrendsScoreService {
  constructor(
    private googleTrendsService: GoogleTrendsService,
  ) {}

  getCryptrendsScore(): number {
    return (this.googleTrendsService.getPercentageDiff() / 200 ) * 10 ;
  }
}
