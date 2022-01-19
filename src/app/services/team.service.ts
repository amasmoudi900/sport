import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamURL: string = "http://localhost:3000/api/teams";
  constructor(private httpClient: HttpClient) { }

  sendReqToGetAllTeams() {
    return this.httpClient.get<{ teamsResult: any, message: string }>(this.teamURL);
  }

  sendReqToAddTeam(team: any, imgFile: File) {
    let formData = new FormData();
    formData.append('name', team.name);
    formData.append('foundation', team.foundation);
    formData.append('stadium', team.stadium);
    formData.append('country', team.country);
    formData.append('img', imgFile);
    return this.httpClient.post<{ message: string }>(this.teamURL, formData);
  }


}
