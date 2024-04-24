package com.example.GlobalWeather.Global.Weather.controller;

import com.example.GlobalWeather.Global.Weather.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class WeatherController {

    @Autowired
    WeatherService weatherService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/get_weather")
    public Mono<?> getWeather() {
        try {
            return weatherService.getWeatherByName("london");
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/get_forecast")
    public Mono<?> getForecast() {
        try {
            return weatherService.getForecastByName("london");
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
