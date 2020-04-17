import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefactChooserComponent } from './artefact-chooser.component';

describe('ArtefactChooserComponent', () => {
  let component: ArtefactChooserComponent;
  let fixture: ComponentFixture<ArtefactChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtefactChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtefactChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
