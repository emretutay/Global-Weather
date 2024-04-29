import { Component, OnInit } from '@angular/core';
import { ForecastResponse,Forecastday } from '../weather/weather.model';
import { ActivatedRoute } from '@angular/router';
import { Router ,Params} from '@angular/router';
import { WeatherService } from '../weather/weather.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lower-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lower-navbar.component.html',
  styleUrl: './lower-navbar.component.css'
})
export class LowerNavbarComponent implements OnInit{
  name:string="";
  constructor(private weatherService: WeatherService,private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.name = params['name'];
          
        }
        )
      }
    
      
  

  onSum(){
    console.log(this.name);
    this.router.navigate(['city',this.name,'weather',this.name]);
  }
  onToday(){
    console.log(this.name);
    this.router.navigate(['city',this.name,'detail',this.name]);
  }
  onForecast(){
    console.log(this.name);
    this.router.navigate(['city',this.name,'forecast',this.name]);
  }
  onAstro(){
    console.log(this.name);
    this.router.navigate(['city',this.name,'astro',this.name]);
  }
  onAir(){
    console.log(this.name);
    this.router.navigate(['city',this.name,'air',this.name]);
  }

}
