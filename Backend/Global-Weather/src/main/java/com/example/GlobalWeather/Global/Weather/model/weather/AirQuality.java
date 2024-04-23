package com.example.GlobalWeather.Global.Weather.model.weather;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.LinkedHashMap;
import java.util.Map;

@Data
public class AirQuality {

    @JsonProperty("co")
    public Double co;
    @JsonProperty("no2")
    public Double no2;
    @JsonProperty("o3")
    public Double o3;
    @JsonProperty("so2")
    public Double so2;
    @JsonProperty("pm2_5")
    public Double pm25;
    @JsonProperty("pm10")
    public Double pm10;
    @JsonProperty("us-epa-index")
    public Integer usEpaIndex;
    @JsonProperty("gb-defra-index")
    public Integer gbDefraIndex;
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
