import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  // backend address
  matchURL: string = "http://localhost:3000/api/matches";
  // define httpclient instance
  constructor(private httpClient: HttpClient) { }

  sendReqToAddMatch(matchObj){
    return this.httpClient.post<{message:string}>(this.matchURL, matchObj);
  }

  sendReqToGetAllMatches(){
    return this.httpClient.get<{result:any, message:string}>(this.matchURL);
  }

  sendReqToGetMatchById(id){
    return this.httpClient.get<{result:any}>(`${this.matchURL}/${id}`);
  }

  sendReqToDeleteMatchById(id){
    return this.httpClient.delete<{message: string}>(`${this.matchURL}/${id}`);
  }

  sendReqToEditMatch(obj){
    return this.httpClient.put<{message:string}>(`${this.matchURL}/${obj._id}`, obj);
  }

  sendReqToSearchByTeamOne(obj){
    return this.httpClient.get<{findedMatches:any}>(`${this.matchURL}/search/${obj.teamOne}`);
  }

  sendReqToSearchByTeamOneWithPost(obj){
    return this.httpClient.post<{findedMatches:any}>(`${this.matchURL}/search`, obj);
  }
}
