import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefactChooserArtefactComponent } from './artefact-chooser-artefact.component';

describe('ChosenArtefactComponent', () => {
  let component: ArtefactChooserArtefactComponent;
  let fixture: ComponentFixture<ArtefactChooserArtefactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArtefactChooserArtefactComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtefactChooserArtefactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
