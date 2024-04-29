import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastHourComponent } from './forecast-hour.component';

describe('ForecastHourComponent', () => {
  let component: ForecastHourComponent;
  let fixture: ComponentFixture<ForecastHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastHourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForecastHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
