import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';
import { TimeAgoPipe } from 'time-ago-pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'newsapp';
  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called' );
  }

  ngOnInit() {
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);

    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);


  }


  searchArticles(source) {
    console.log('selected source is:' + source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
 }

}

