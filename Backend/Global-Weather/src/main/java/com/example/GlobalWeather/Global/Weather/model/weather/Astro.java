package com.example.GlobalWeather.Global.Weather.model.weather;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.LinkedHashMap;
import java.util.Map;

public class Astro {
    @JsonProperty("sunrise")
    public String sunrise;
    @JsonProperty("sunset")
    public String sunset;
    @JsonProperty("moonrise")
    public String moonrise;
    @JsonProperty("moonset")
    public String moonset;
    @JsonProperty("moon_phase")
    public String moonPhase;
    @JsonProperty("moon_illumination")
    public Integer moonIllumination;
    @JsonProperty("is_moon_up")
    public Integer isMoonUp;
    @JsonProperty("is_sun_up")
    public Integer isSunUp;
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
