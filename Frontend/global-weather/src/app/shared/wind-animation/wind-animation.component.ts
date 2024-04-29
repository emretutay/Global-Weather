import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-wind-animation',
  standalone: true,
  imports: [],
  templateUrl: './wind-animation.component.html',
  styleUrl: './wind-animation.component.css'
})
export class WindAnimationComponent {

  @Input() windDegree: number = 0;
  @Input() windDirection: string = 'N';
  @Input() windSpeed: number = 0;
 
  
  updateWindDirection() {

   

    // Update the wind direction based on the degree
    const degrees = this.windDegree;
    if (degrees >= 0 && degrees < 22.5 || degrees >= 337.5) {
      this.windDirection = 'N';
    } else if (degrees >= 22.5 && degrees < 67.5) {
      this.windDirection = 'NE';
    } else if (degrees >= 67.5 && degrees < 112.5) {
      this.windDirection = 'E';
    } else if (degrees >= 112.5 && degrees < 157.5) {
      this.windDirection = 'SE';
    } else if (degrees >= 157.5 && degrees < 202.5) {
      this.windDirection = 'S';
    } else if (degrees >= 202.5 && degrees < 247.5) {
      this.windDirection = 'SW';
    } else if (degrees >= 247.5 && degrees < 292.5) {
      this.windDirection = 'W';
    } else {
      this.windDirection = 'NW';
    }
  }
}
