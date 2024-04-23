package com.example.GlobalWeather.Global.Weather.model.weather;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.LinkedHashMap;
import java.util.Map;

@Data
public class Current {

    @JsonProperty("last_updated_epoch")
    public Integer lastUpdatedEpoch;
    @JsonProperty("last_updated")
    public String lastUpdated;
    @JsonProperty("temp_c")
    public Double tempC;
    @JsonProperty("temp_f")
    public Double tempF;
    @JsonProperty("is_day")
    public Integer isDay;
    @JsonProperty("condition")
    public Condition condition;
    @JsonProperty("wind_mph")
    public Double windMph;
    @JsonProperty("wind_kph")
    public Double windKph;
    @JsonProperty("wind_degree")
    public Integer windDegree;
    @JsonProperty("wind_dir")
    public String windDir;
    @JsonProperty("pressure_mb")
    public Double pressureMb;
    @JsonProperty("pressure_in")
    public Double pressureIn;
    @JsonProperty("precip_mm")
    public Double precipMm;
    @JsonProperty("precip_in")
    public Double precipIn;
    @JsonProperty("humidity")
    public Integer humidity;
    @JsonProperty("cloud")
    public Integer cloud;
    @JsonProperty("feelslike_c")
    public Double feelslikeC;
    @JsonProperty("feelslike_f")
    public Double feelslikeF;
    @JsonProperty("vis_km")
    public Double visKm;
    @JsonProperty("vis_miles")
    public Double visMiles;
    @JsonProperty("uv")
    public Double uv;
    @JsonProperty("gust_mph")
    public Double gustMph;
    @JsonProperty("gust_kph")
    public Double gustKph;
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
