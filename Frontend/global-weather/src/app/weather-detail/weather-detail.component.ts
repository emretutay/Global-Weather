import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherResponse,ForecastResponse,Forecastday } from '../weather/weather.model';
import { WeatherService } from '../weather/weather.service';
import { ActivatedRoute } from '@angular/router';
import { Router ,Params} from '@angular/router';
import { WindAnimationComponent } from '../shared/wind-animation/wind-animation.component';

@Component({
  selector: 'app-weather-detail',
  standalone: true,
  imports: [CommonModule,WindAnimationComponent],
  templateUrl: './weather-detail.component.html',
  styleUrl: './weather-detail.component.css'
})
export class WeatherDetailComponent implements OnInit {
  weather!: WeatherResponse;
  forecast!: ForecastResponse;
  forecastdays!: Forecastday[];
  name:string="";
  
  constructor(private weatherService: WeatherService,private route: ActivatedRoute, private router: Router){}
  ngOnInit(){
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
