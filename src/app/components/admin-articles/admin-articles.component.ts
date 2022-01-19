import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.css']
})
export class AdminArticlesComponent implements OnInit {

  articles: any = [];
  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.articleService.getAllArticles().subscribe(
      (data) => {
        this.articles = data.result;
      }
    );
  }

  goToDisplayOrEditArticle(id, type) {
    if (type == "0") {
      this.router.navigate([`displayArticle/${id}`]);
    } else {
      this.router.navigate([`editArticle/${id}`]);
    }
  }


  goToAddArticle() {
    this.router.navigate(['addArticle']);
  }

}
