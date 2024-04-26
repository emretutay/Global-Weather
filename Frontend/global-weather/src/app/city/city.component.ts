import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherResponse,ForecastResponse,Forecastday } from '../weather/weather.model';
import { WeatherService } from '../weather/weather.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Router ,Params} from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavbarComponent],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css',
  providers:[WeatherService]
})
export class CityComponent implements OnInit{

  
  name:string="";

  constructor(private weatherService: WeatherService,private route: ActivatedRoute, private router: Router){}
  ngOnInit(){
    this.route.params
      .subscribe(
        (params: Params) => {
          this.name = params['name'];
         
        
        
          
        }
      );
      
      this.router.navigate(['city', this.name, 'weather', this.name]);
   
  }
   
 
   
    
   
    
  }


