import { Component, OnInit } from '@angular/core';

import { ForecastResponse,Forecastday,WeatherResponse } from '../weather/weather.model';
import { ActivatedRoute } from '@angular/router';
import { Router ,Params} from '@angular/router';
import { WeatherService } from '../weather/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-air-quality',
  standalone: true,
  imports: [],
  templateUrl: './air-quality.component.html',
  styleUrl: './air-quality.component.css'
})
export class AirQualityComponent implements OnInit{
  forecast!: ForecastResponse;
  forecastdays!: Forecastday[];
  name:string="";
  weather!: WeatherResponse;

  constructor(private weatherService: WeatherService,private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.name = params['name'];
        this.weatherService.getWeather(this.name).
        subscribe(wResponse=>{
          this.weather = wResponse;
        })
      this.weatherService.getForecast(this.name).
      subscribe(fResponse=>{
        this.forecast = fResponse;
        this.forecastdays = this.forecast.forecast.forecastday;
      })
        
      }
    );
  
    
  }

}
