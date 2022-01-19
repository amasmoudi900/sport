import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleURL:string = "http://localhost:3000/articles"
  constructor(private httpClient:HttpClient) { }

  getAllArticles(){
    return this.httpClient.get<{result:any, message:string}>(this.articleURL);
  }

  getArticleById(id){
    return this.httpClient.get<{result:any, message:string}>(`${this.articleURL}/${id}`);
  }

  editArticleById(obj){
    return this.httpClient.put<{message:string}>(`${this.articleURL}/${obj.id}`, obj);
  }

  addArticle(obj){
    return this.httpClient.post<{message:string}>(this.articleURL, obj);
  }
}
