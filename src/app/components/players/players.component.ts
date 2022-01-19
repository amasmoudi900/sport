import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  allPlayers:any;
  constructor() { }

  ngOnInit() {
    this.allPlayers = [
      {id:1, name: 'Messi', poste:'ATK', nbr: 10, avatar: 'assets/images/img_1.jpg'},
      {id:2, name: 'Ronaldo', poste:'MID', nbr: 7, avatar: 'assets/images/img_1.jpg'},
      {id:3, name: 'Buffon', poste:'GK', nbr: 2, avatar: 'assets/images/img_1.jpg'},
      {id:4, name: 'Badra', poste:'DEF', nbr: 4, avatar: 'assets/images/img_1.jpg'}
    ]
  }

}
