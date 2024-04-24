package com.example.GlobalWeather.Global.Weather.model.weather;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class Forecastday {
    @JsonProperty("date")
    public String date;
    @JsonProperty("date_epoch")
    public Integer dateEpoch;
    @JsonProperty("day")
    public Day day;
    @JsonProperty("astro")
    public Astro astro;
    @JsonProperty("hour")
    public List<Hour> hour;
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

