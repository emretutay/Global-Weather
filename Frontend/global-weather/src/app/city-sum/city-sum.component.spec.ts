import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySumComponent } from './city-sum.component';

describe('CitySumComponent', () => {
  let component: CitySumComponent;
  let fixture: ComponentFixture<CitySumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitySumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitySumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
