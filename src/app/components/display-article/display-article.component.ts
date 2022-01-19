import { ActivatedRoute } from '@angular/router';
import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.css']
})
export class DisplayArticleComponent implements OnInit {

  id:any;
  article:any;
  constructor(
    private articleService:ArticleService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.articleService.getArticleById(this.id).subscribe(
      (data)=> {
        this.article = data.result;
      }
    )
  }

}
