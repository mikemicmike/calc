import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenArtefactComponent } from './chosen-artefact.component';

describe('ChosenArtefactComponent', () => {
  let component: ChosenArtefactComponent;
  let fixture: ComponentFixture<ChosenArtefactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosenArtefactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenArtefactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
