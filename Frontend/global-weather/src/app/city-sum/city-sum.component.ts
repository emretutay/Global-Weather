import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherResponse,ForecastResponse,Forecastday } from '../weather/weather.model';
import { WeatherService } from '../weather/weather.service';
import { ActivatedRoute } from '@angular/router';
import { Router ,Params} from '@angular/router';
import { SafePipe } from '../safe.pipe';


@Component({
  selector: 'app-city-sum',
  standalone: true,
  imports: [CommonModule,SafePipe],
  templateUrl: './city-sum.component.html',
  styleUrl: './city-sum.component.css'
})
export class CitySumComponent implements OnInit{
  weather!: WeatherResponse;
  forecast!: ForecastResponse;
  forecastdays!: Forecastday[];
  name:string="";
  adjustedName:string="";
 
  map:string="";
  constructor(private weatherService: WeatherService,private route: ActivatedRoute, private router: Router){}
  ngOnInit(){
    this.route.params
      .subscribe(
        (params: Params) => {
          this.name = params['name'];
          var map="https://www.google.com/maps/embed/v1/place?key=AIzaSyA84M_PGqg-D8VH3VA2ZcSjQJNNqnOInxU&q=" ;
          
          this.weatherService.getWeather(this.name).
          subscribe(wResponse=>{
            this.weather = wResponse;
            this.adjustedName = this.weather.location.name.replace(/ /g, '+');
            this.map = map.concat(this.adjustedName);
          })
        
        this.weatherService.getForecast(this.name).
        subscribe(fResponse=>{
          this.forecast = fResponse;
          this.forecastdays = this.forecast.forecast.forecastday;
          
        })
          
        })
        
   
   
  }
   
  onWeatherDetail(){
    this.router.navigate(['city', this.name, 'detail', this.name]);
    
  }
  onForecast(){
    this.router.navigate(['city', this.name, 'forecast', this.name]);
    
  }
  onAstro(){
    this.router.navigate(['city', this.name, 'astro', this.name]);
    
  }
  onAir(){
    this.router.navigate(['city', this.name, 'air', this.name]);
  }
   

  getAirColor(index: number): string {
    switch (index) {
      case 1:
        return 'green'; // Good air quality
      case 2:
        return 'yellowgreen'; // Moderate air quality
      case 3:
        return 'orange'; // Unhealthy for sensitive groups
      case 4:
        return 'red'; // Unhealthy air quality
      case 5:
        return 'purple'; // Very unhealthy air quality
      case 6:
        return 'black'; // Hazardous air quality
      default:
        return 'black'; // Default color
    }
  }
   
   
    
  }

