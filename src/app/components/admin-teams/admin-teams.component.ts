import { TeamService } from './../../services/team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.css']
})
export class AdminTeamsComponent implements OnInit {

  teams: any = [];
  constructor(private teamService:TeamService) { }

  ngOnInit() {
    this.teamService.sendReqToGetAllTeams().subscribe(
      (data)=> {
        this.teams = data.teamsResult;
      }
    );
  }

}
