import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpCalculatorComponent } from './xp-calculator.component';

describe('XpCalculatorComponent', () => {
  let component: XpCalculatorComponent;
  let fixture: ComponentFixture<XpCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
