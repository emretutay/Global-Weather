import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-uv-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uv-animation.component.html',
  styleUrl: './uv-animation.component.css'
})
export class UvAnimationComponent implements OnChanges {
  @Input() uvIndex: number = 0;

  
  indicatorPosition = 0;

  ngOnChanges() {
    this.updateIndicatorPosition();
  }

  updateIndicatorPosition() {
    if (this.uvIndex) {
      this.indicatorPosition = (this.uvIndex / 12) * 100;
    } else {
      this.indicatorPosition = 0;
    }
  }

}
