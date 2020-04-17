import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeededMaterialsComponent } from './needed-materials.component';

describe('NeededMaterialsComponent', () => {
  let component: NeededMaterialsComponent;
  let fixture: ComponentFixture<NeededMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeededMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeededMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
