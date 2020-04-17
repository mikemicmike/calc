import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefactChooserSectionComponent } from './artefact-chooser-section.component';

describe('ArtefactChooserSectionComponent', () => {
  let component: ArtefactChooserSectionComponent;
  let fixture: ComponentFixture<ArtefactChooserSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtefactChooserSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtefactChooserSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
