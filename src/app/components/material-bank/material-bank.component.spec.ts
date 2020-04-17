import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialBankComponent } from './material-bank.component';

describe('MaterialBankComponent', () => {
  let component: MaterialBankComponent;
  let fixture: ComponentFixture<MaterialBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
