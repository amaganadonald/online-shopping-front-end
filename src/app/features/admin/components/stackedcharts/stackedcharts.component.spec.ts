import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedchartsComponent } from './stackedcharts.component';

describe('StackedchartsComponent', () => {
  let component: StackedchartsComponent;
  let fixture: ComponentFixture<StackedchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackedchartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StackedchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
