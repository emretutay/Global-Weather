import { HttpClient } from "@angular/common/http";
import { WeatherResponse,ForecastResponse } from "./weather.model";
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class WeatherService{
    

    weather_api:string = "http://localhost:8080/get_weather/"
    forecast_api:string = "http://localhost:8080/get_forecast/"
    
    
    constructor(private http: HttpClient){}
    getWeather(name:string):Observable<WeatherResponse>{
        var api = this.weather_api.concat(name);
        return this.http.get<WeatherResponse>(api);

    }
    getForecast(name:string):Observable<ForecastResponse>{
        var api = this.forecast_api.concat(name);
        return this.http.get<ForecastResponse>(api);

    }
    
}