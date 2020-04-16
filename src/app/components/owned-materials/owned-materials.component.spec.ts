import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnedMaterialsComponent } from './owned-materials.component';

describe('OwnedMaterialsComponent', () => {
  let component: OwnedMaterialsComponent;
  let fixture: ComponentFixture<OwnedMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnedMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnedMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
