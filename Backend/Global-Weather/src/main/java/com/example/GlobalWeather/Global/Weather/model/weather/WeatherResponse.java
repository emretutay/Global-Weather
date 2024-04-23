package com.example.GlobalWeather.Global.Weather.model.weather;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;

import java.util.LinkedHashMap;
import java.util.Map;



@Data
public class WeatherResponse {


        @JsonProperty("location")
        public Location location;

        @JsonProperty("current")
        public Current current;

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


