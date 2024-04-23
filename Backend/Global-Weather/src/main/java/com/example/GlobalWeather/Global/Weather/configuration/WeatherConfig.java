package com.example.GlobalWeather.Global.Weather.configuration;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WeatherConfig {

    @Value("${weatherapi.baseurl}")
    private String baseUrl;

    @Bean
    public ModelMapper modelMapperBean() {
        return new ModelMapper();
    }

    @Bean
    public WebClient webClient() {
        System.out.println(baseUrl);
        return WebClient.builder().baseUrl(baseUrl).build();

    }
}
