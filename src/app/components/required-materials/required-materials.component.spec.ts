import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredMaterialsComponent } from './required-materials.component';

describe('RequiredMaterialsComponent', () => {
  let component: RequiredMaterialsComponent;
  let fixture: ComponentFixture<RequiredMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiredMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
