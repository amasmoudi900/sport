import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherForm: FormGroup;
  weather:any;
  errorMsg:string;
  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherForm = this.formBuilder.group({
      city: ['', [Validators.required]]
    })
  }

  search() {
    console.log('Here city', typeof(this.weatherForm.value));
    this.weatherService.searchByCity(this.weatherForm.value).subscribe(
      (data)=> {
        console.log('Here data from API', data.result);  
        if (data.message != 'OK') {
          this.errorMsg = data.message;
          this.weather = null;
        } else {
          this.errorMsg = null;
          this.weather = data.result;
        }
      }
    )
  }
}