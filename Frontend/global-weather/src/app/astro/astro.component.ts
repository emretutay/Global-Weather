import { Component, OnInit } from '@angular/core';

import { ForecastResponse,Forecastday,WeatherResponse } from '../weather/weather.model';
import { ActivatedRoute } from '@angular/router';
import { Router ,Params} from '@angular/router';
import { WeatherService } from '../weather/weather.service';
import { CommonModule } from '@angular/common';
import { YesNoPipe } from '../yesno.pipe';

@Component({
  selector: 'app-astro',
  standalone: true,
  imports: [CommonModule,YesNoPipe],
  templateUrl: './astro.component.html',
  styleUrl: './astro.component.css'
})
export class AstroComponent implements OnInit {
  forecast!: ForecastResponse;
  forecastdays!: Forecastday[];
  name:string="";
  weather!: WeatherResponse;
  moonPhase:string="";
  iconClass:string="";

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
          
          this.moonPhase = this.forecastdays[0].astro.moon_phase;
          this.setIconClass();
        })
          
        }
      );
    
  }

  setIconClass() {
    // Determine which icon class to use based on moon phase
    switch (this.moonPhase) {
      case 'New Moon':
        this.iconClass = 'new-moon';
        break;
      case 'Waxing Crescent':
        this.iconClass = 'waxing-crescent';
        break;
      case 'First Quarter':
        this.iconClass = 'first-quarter';
        break;
      case 'Waxing Gibbous':
        this.iconClass = 'waxing-gibbous';
        break;
      case 'Full Moon':
        this.iconClass = 'full-moon';
        break;
      case 'Waning Gibbous':
        this.iconClass = 'waning-gibbous';
        break;
      case 'Last Quarter':
        this.iconClass = 'last-quarter';
        break;
      case 'Waning Crescent':
        this.iconClass = 'waning-crescent';
        break;    
          
      // Add cases for other phases as needed
      default:
        this.iconClass = 'fas fa-moon';
    }
  }
}
