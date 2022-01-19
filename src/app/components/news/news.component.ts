import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  // global variable
  x: number = 9;
  newsTab: any = [];
  constructor() { }

  ngOnInit() {
    this.newsTab = [
      {id:1, title: 'Tun vs Alg', description: 'Partie finale 2021', img: "", avatar: "", date: '18/12/2021'},
      {id:2, title: 'Title 2', description: 'Description 2', img: "", avatar: "", date: '18/12/2021'},
      {id:3, title: 'Title 3', description: 'Description 3', img: "", avatar: "", date: '18/12/2021'},
      {id:4, title: 'Tun vs Alg', description: 'Partie finale 2021', img: "", avatar: "", date: '18/12/2021'},
      {id:5, title: 'Tun vs Alg', description: 'Partie finale 2021', img: "", avatar: "", date: '18/12/2021'},
      {id:5, title: 'Tun vs Alg', description: 'Partie finale 2021', img: "", avatar: "", date: '18/12/2021'}
    ]
  }
  calcul(a, b) {
    return a + b;
  }

}
