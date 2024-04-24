import { Component ,OnInit} from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { ForecastResponse, WeatherResponse } from '../weather/weather.model';
import { Subscription } from 'rxjs';
import { Forecastday } from '../weather/weather.model';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { NzTableModule } from 'ng-zorro-antd/table';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatTableModule,NzTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[WeatherService]
})
export class HomeComponent implements OnInit{

  weather!: WeatherResponse;
  forecast!: ForecastResponse;
  forecastdays!: Forecastday[];
  
  constructor(private weatherService: WeatherService){
    
  }


  ngOnInit(){
    this.weatherService.getWeather().
    subscribe(wResponse=>{
      this.weather = wResponse;
    });

    this.weatherService.getForecast().
    subscribe(fResponse=>{
      this.forecast = fResponse;
      this.forecastdays = this.forecast.forecast.forecastday;
    });
    
  }

}
