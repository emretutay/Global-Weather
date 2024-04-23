package com.example.GlobalWeather.Global.Weather.model.weather;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.LinkedHashMap;
import java.util.Map;

@Data
public class Location {

    @JsonProperty("name")
    public String name;
    @JsonProperty("region")
    public String region;
    @JsonProperty("country")
    public String country;
    @JsonProperty("lat")
    public Double lat;
    @JsonProperty("lon")
    public Double lon;
    @JsonProperty("tz_id")
    public String tzId;
    @JsonProperty("localtime_epoch")
    public Integer localtimeEpoch;
    @JsonProperty("localtime")
    public String localtime;

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
