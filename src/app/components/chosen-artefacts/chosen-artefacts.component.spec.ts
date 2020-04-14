import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenArtefactsComponent } from './chosen-artefacts.component';

describe('ChosenArtefactsComponent', () => {
  let component: ChosenArtefactsComponent;
  let fixture: ComponentFixture<ChosenArtefactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosenArtefactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenArtefactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
