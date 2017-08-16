import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GoogleTrendsService {
  constructor(private http: HttpClient) {}

  googleTrendsUrl = 'http://127.0.0.1:8000/key-indicators/google-trends.json/';

  score: number;

  getPercentageDiff(): Promise<number> {
    return this.http.get(this.googleTrendsUrl)
      .toPromise()
      .then((response: Response) => response[0].score as number)
      .catch(this.handleError);
  }


  // getPercentageDiff(): number {
  //   this.http.get('http://127.0.0.1:8000/key-indicators/google-trends.json/')
  //     .subscribe(data => {
  //       this.score = parseInt(data[0].score);
  //     });
  //   return this.score;
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
