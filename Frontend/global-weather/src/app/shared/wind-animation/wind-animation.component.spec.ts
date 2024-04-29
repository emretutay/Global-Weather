import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindAnimationComponent } from './wind-animation.component';

describe('WindAnimationComponent', () => {
  let component: WindAnimationComponent;
  let fixture: ComponentFixture<WindAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
