import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL: string = "http://localhost:3000/api/users";
  constructor(private httpClient: HttpClient) { }

  getProfile(id) {
    return this.httpClient.get<{message: string, result:any}>(`${this.userURL}/${id}`);
  }

  signup(userObj){
    return this.httpClient.post<{message:string}>(`${this.userURL}/signup`, userObj);
  }

  editProfile(obj){
    return this.httpClient.put(`${this.userURL}/${obj.id}`, obj);
  }

  login(userObj){
    return this.httpClient.post<{user:any, message:string}>(`${this.userURL}/login`, userObj);
  }

  getAllUsers(){
    return this.httpClient.get<{result:any, message:string}>(this.userURL);
  }
}
