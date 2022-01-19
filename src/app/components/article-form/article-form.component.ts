import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  articleForm: FormGroup;
  article: any = {};
  id:any;
  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.articleService.getArticleById(this.id).subscribe(
        (data)=> {
          this.article = data.result;
        }
      );
    }
    this.articleForm = this.formBuilder.group({
      title: [''],
      content: [''],
      date: ['']
    })
  }

  addOrEditArticle(){
   if (this.id) {
    this.articleService.editArticleById(this.article).subscribe(
      (data)=> {
        console.log('Here msg from BE', data.message);
        this.router.navigate(['admin']);
      }
    );
   } else {
    this.articleService.addArticle(this.article).subscribe(
      (data)=> {
        console.log('Here msg from BE', data.message);
        this.router.navigate(['admin']);
      }
    );
   }
  }

}
