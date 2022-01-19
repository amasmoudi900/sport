import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherURL: string = "http://localhost:3000/api/weather"
  constructor(private httpClient: HttpClient) { }

  // with GET METHOD
  searchByCity(cityObj) {
    console.log('City obj into service', typeof (cityObj));

    return this.httpClient.get<{ result: any, message: string }>(`${this.weatherURL}/${JSON.stringify(cityObj)}`);
  }

  // with POST METHOD
  searchByCityPost(cityObj) {
    return this.httpClient.post(this.weatherURL, cityObj);
  }
}
