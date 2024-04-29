import { Component, OnInit } from '@angular/core';
import { ForecastResponse,Forecastday } from '../weather/weather.model';
import { ActivatedRoute } from '@angular/router';
import { Router ,Params} from '@angular/router';
import { WeatherService } from '../weather/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent implements OnInit{

  forecast!: ForecastResponse;
  forecastdays!: Forecastday[];
  name:string="";

  constructor(private weatherService: WeatherService,private route: ActivatedRoute, private router: Router){}
  ngOnInit(){
    this.route.params
      .subscribe(
        (params: Params) => {
          this.name = params['name'];
          
        this.weatherService.getForecast(this.name).
        subscribe(fResponse=>{
          this.forecast = fResponse;
          this.forecastdays = this.forecast.forecast.forecastday;
        })
          
        }
      );
   
  }

  onForecastHour(date:string){

    this.router.navigate(['city', this.name, 'forecast', this.name,date]);
  }
}

