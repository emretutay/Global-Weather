import { Component, OnInit } from '@angular/core';
import { ForecastResponse,Forecastday, Hour } from '../weather/weather.model';
import { ActivatedRoute } from '@angular/router';
import { Router ,Params} from '@angular/router';
import { WeatherService } from '../weather/weather.service';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-forecast-hour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast-hour.component.html',
  styleUrl: './forecast-hour.component.css',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '300px',
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '650px',
        overflow: 'hidden'
      })),
      transition('collapsed <=> expanded', [
        animate('0.6s ease')
      ])
    ])
  ]
})
export class ForecastHourComponent implements OnInit {
  forecast!: ForecastResponse;
  forecastdays!: Forecastday[];
  forecastday!:Forecastday
  forecasthours!:Hour[];
  shownHour = null;
  name:string="";
  day:string="";
  numberOfItems = 24;
  isExpanded: boolean[] = [];
  constructor(private weatherService: WeatherService,private route: ActivatedRoute, private router: Router){
    for (let i = 0; i < this.numberOfItems; i++) {
      this.isExpanded.push(false);
    }
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.name = params['name'];
          this.day = params['day'];
          
        this.weatherService.getForecast(this.name).
        subscribe(fResponse=>{
          this.forecast = fResponse;
          this.forecastdays = this.forecast.forecast.forecastday;
          var day = this.forecastdays.find(forecastday => forecastday.date === this.day);
          this.forecastday = day as Forecastday;
          this.forecasthours = this.forecastday.hour
        })
          
        }
      );
    
  }
  toggleExpansion(index: number) {
    this.isExpanded[index] = !this.isExpanded[index];
  }
  isListExpanded(hour:any) {
    return this.isExpanded[hour];
 };

}
