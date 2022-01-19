import { TeamService } from './../../services/team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  allTeams: any;
  constructor(private teamService:TeamService) { }

  ngOnInit() {
    this.teamService.sendReqToGetAllTeams().subscribe(
      (data)=> {
        this.allTeams = data.teamsResult;
      }
    );
  }

}
