package com.example.GlobalWeather.Global.Weather.model.weather;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.LinkedHashMap;
import java.util.Map;

public class Day {
    @JsonProperty("maxtemp_c")
    public Double maxtempC;
    @JsonProperty("maxtemp_f")
    public Double maxtempF;
    @JsonProperty("mintemp_c")
    public Double mintempC;
    @JsonProperty("mintemp_f")
    public Double mintempF;
    @JsonProperty("avgtemp_c")
    public Double avgtempC;
    @JsonProperty("avgtemp_f")
    public Double avgtempF;
    @JsonProperty("maxwind_mph")
    public Double maxwindMph;
    @JsonProperty("maxwind_kph")
    public Double maxwindKph;
    @JsonProperty("totalprecip_mm")
    public Double totalprecipMm;
    @JsonProperty("totalprecip_in")
    public Double totalprecipIn;
    @JsonProperty("totalsnow_cm")
    public Double totalsnowCm;
    @JsonProperty("avgvis_km")
    public Double avgvisKm;
    @JsonProperty("avgvis_miles")
    public Double avgvisMiles;
    @JsonProperty("avghumidity")
    public Integer avghumidity;
    @JsonProperty("daily_will_it_rain")
    public Integer dailyWillItRain;
    @JsonProperty("daily_chance_of_rain")
    public Integer dailyChanceOfRain;
    @JsonProperty("daily_will_it_snow")
    public Integer dailyWillItSnow;
    @JsonProperty("daily_chance_of_snow")
    public Integer dailyChanceOfSnow;
    @JsonProperty("condition")
    public Condition condition;
    @JsonProperty("uv")
    public Double uv;
    @JsonProperty("air_quality")
    public AirQuality airQuality;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }
}
