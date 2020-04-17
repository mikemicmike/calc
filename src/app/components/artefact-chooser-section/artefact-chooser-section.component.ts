import { Component, OnInit, Input } from '@angular/core';
import { IArtefactChooserSection } from 'src/app/models/IArtefactChooserSection';

@Component({
  selector: 'app-artefact-chooser-section',
  templateUrl: './artefact-chooser-section.component.html',
  styleUrls: ['./artefact-chooser-section.component.scss'],
})
export class ArtefactChooserSectionComponent implements OnInit {
  @Input()
  public section: IArtefactChooserSection;

  @Input()
  public darkMode: boolean;

  @Input()
  public byFaction: boolean;

  constructor() {}

  public ngOnInit(): void {}
}
