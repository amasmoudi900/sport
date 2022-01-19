import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerURL: string = "http://localhost:3000/players";
  constructor(private httpClient: HttpClient) { }

  sendReqToCalculateIMC(obj) {
    return this.httpClient.post<{ imc:string, message: string }>(`${this.playerURL}/imc`, obj);
  }

  sendReqToGetAllPlayers(){
    return this.httpClient.get<{result:any, message:string}>(this.playerURL);
  }

  sendReqToGetPlayerByID(id){
    return this.httpClient.get<{result:any, message:string}>(`${this.playerURL}/${id}`);
  }
}
