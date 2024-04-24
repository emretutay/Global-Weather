import { Component ,OnInit} from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { ForecastResponse, WeatherResponse } from '../weather/weather.model';
import { Subscription } from 'rxjs';
import { Forecastday } from '../weather/weather.model';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatTableModule,NzTableModule,FormsModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[WeatherService]
})
export class HomeComponent implements OnInit{

  searchText!: string;
  weather!: WeatherResponse;
  forecast!: ForecastResponse;
  forecastdays!: Forecastday[];
  formdata:any;
  constructor(private weatherService: WeatherService){
    
  }


  ngOnInit(){
    this.formdata = new FormGroup({
      search: new FormControl("")
      
   });
    this.weatherService.getWeather(this.searchText).
    subscribe(wResponse=>{
      this.weather = wResponse;
    });

    this.weatherService.getForecast(this.searchText).
    subscribe(fResponse=>{
      this.forecast = fResponse;
      this.forecastdays = this.forecast.forecast.forecastday;
    });
    
  }

  onSubmit(text:any) {
    
    this.searchText=text.search;
    console.log(text);
    this.weatherService.getWeather(this.searchText).
    subscribe(wResponse=>{
      this.weather = wResponse;
    });

    this.weatherService.getForecast(this.searchText).
    subscribe(fResponse=>{
      this.forecast = fResponse;
      this.forecastdays = this.forecast.forecast.forecastday;
    });
    console.log('Form submitted!');
  }

}
