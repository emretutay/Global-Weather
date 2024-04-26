import { Component ,OnInit} from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[WeatherService]
})
export class HomeComponent {
  text:string="";
  constructor(private weatherService: WeatherService,private router: Router, private route: ActivatedRoute,){
    console.log(this.route);
  }


  onSubmit(formValue: { text: string }) {
    
    
    
    
    this.router.navigate(['city',formValue.text,'weather',formValue.text])
    
    console.log('Form submitted!');
  }
    
  }


  


  