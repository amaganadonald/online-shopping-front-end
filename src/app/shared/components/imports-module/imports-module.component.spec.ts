import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportsModuleComponent } from './imports-module.component';

describe('ImportsModuleComponent', () => {
  let component: ImportsModuleComponent;
  let fixture: ComponentFixture<ImportsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportsModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
