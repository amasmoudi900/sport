import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  m: any;
  constructor() { }

  ngOnInit() {
    this.m = { id: 5, scoreOne: 6, scoreTwo: 8, teamOne: "A", teamTwo: "B" };
  }

}
