import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvAnimationComponent } from './uv-animation.component';

describe('UvAnimationComponent', () => {
  let component: UvAnimationComponent;
  let fixture: ComponentFixture<UvAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UvAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UvAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
