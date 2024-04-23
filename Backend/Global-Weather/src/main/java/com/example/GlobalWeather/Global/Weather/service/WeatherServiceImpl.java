package com.example.GlobalWeather.Global.Weather.service;

import com.example.GlobalWeather.Global.Weather.model.weather.WeatherResponse;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
@Service
public class WeatherServiceImpl implements WeatherService{
    @Autowired
    private ModelMapper mapper;

    @Autowired
    private WebClient webClient;


    private static final Logger logger = LogManager.getLogger(WeatherServiceImpl.class);
    @Override
    public Mono<WeatherResponse> getWeatherByName(String name) {
         return webClient.get()
                .uri("http://api.weatherapi.com/v1/current.json?key=2eca6817f33741bdbd4150815242204&q=London&aqi=yes")
                .retrieve()
                .bodyToMono(WeatherResponse.class)
                 .doOnError(throwable -> logger.error("Failed for some reason", throwable));


    }
}
