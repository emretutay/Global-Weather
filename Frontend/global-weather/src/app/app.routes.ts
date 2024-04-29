import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CityComponent } from './city/city.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { CitySumComponent } from './city-sum/city-sum.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ForecastHourComponent } from './forecast-hour/forecast-hour.component';
import { AstroComponent } from './astro/astro.component';
import { AirQualityComponent } from './air-quality/air-quality.component';


export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path:'home',
        component:HomeComponent
        
    },
    {path:'city/:name',component:CityComponent, children : [
        {path:'weather/:name',component:CitySumComponent},
        {path:'detail/:name',component:WeatherDetailComponent},
        {path:'forecast/:name',component:ForecastComponent},
        {path:'forecast/:name/:day',component:ForecastHourComponent},
        {path:'astro/:name',component:AstroComponent},
        {path:'air/:name',component:AirQualityComponent}



    ]}
];
