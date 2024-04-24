import { HttpClient } from "@angular/common/http";
import { WeatherResponse,ForecastResponse } from "./weather.model";
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from "@angular/core";

@Injectable()
export class WeatherService{
    weather_api:string = "http://localhost:8080/get_weather"
    forecast_api:string = "http://localhost:8080/get_forecast"
    
    
    constructor(private http: HttpClient){}
    getWeather():Observable<WeatherResponse>{
        return this.http.get<WeatherResponse>(this.weather_api);

    }
    getForecast():Observable<ForecastResponse>{
        return this.http.get<ForecastResponse>(this.forecast_api);

    }
}