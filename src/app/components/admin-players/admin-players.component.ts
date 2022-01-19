import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styleUrls: ['./admin-players.component.css']
})
export class AdminPlayersComponent implements OnInit {

  players: any = []
  constructor(
    private playerService:PlayerService,
    private router:Router) { }

  ngOnInit() {
    this.playerService.sendReqToGetAllPlayers().subscribe(
      (data)=> {
        console.log('here result from BE', data);
        this.players = data.result;
      }
    );
  }

  goToAddPlayer(){
    this.router.navigate(['addPlayer']);
  }

  goToEditPlayer(id){
    this.router.navigate([`editPlayer/${id}`]);
  }

}


