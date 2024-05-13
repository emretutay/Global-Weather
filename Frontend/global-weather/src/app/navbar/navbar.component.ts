import { Component,ViewEncapsulation } from '@angular/core';
import { WeatherResponse,ForecastResponse,Forecastday } from '../weather/weather.model';
import { WeatherService } from '../weather/weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LowerNavbarComponent } from '../lower-navbar/lower-navbar.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,CommonModule,LowerNavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers:[WeatherService],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NavbarComponent {
  searchText!: string;
  weather!: WeatherResponse;
  forecast!: ForecastResponse;
  forecastdays!: Forecastday[];
  text:string="";

  constructor(private weatherService: WeatherService,private router: Router, private route: ActivatedRoute,){
    console.log(this.route);
  }

  onSubmit(formValue: { text: string }) {
    
    
    
    
    this.router.navigate(['city',formValue.text,'weather',formValue.text])
    
    console.log('Form submitted!');
  }


}
