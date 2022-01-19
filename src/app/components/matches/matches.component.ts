import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  allMatches:any=[];
  constructor() { }

  ngOnInit() {
    this.allMatches = [
      {id:1 , scoreOne: 1, scoreTwo: 0, teamOne: 'RMD', teamTwo:'FCB'},
      {id:2 , scoreOne: 1, scoreTwo: 1, teamOne: 'RMD', teamTwo:'FCB'},
      {id:3 , scoreOne: 1, scoreTwo: 2, teamOne: 'RMD', teamTwo:'FCB'}
    ]
  }

}
