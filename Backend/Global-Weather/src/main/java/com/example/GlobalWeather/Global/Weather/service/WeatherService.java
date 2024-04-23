package com.example.GlobalWeather.Global.Weather.service;


import com.example.GlobalWeather.Global.Weather.model.weather.WeatherResponse;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;



public interface WeatherService {

    public Mono<WeatherResponse> getWeatherByName(String name);


}
