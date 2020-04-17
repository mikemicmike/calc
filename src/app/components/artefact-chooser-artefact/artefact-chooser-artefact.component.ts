import { Component, OnInit, Input } from '@angular/core';
import { IArtefact } from 'src/app/models/IArtefact';
import { StoreService } from 'src/app/core/store.service';

@Component({
  selector: 'app-artefact-chooser-artefact',
  templateUrl: './artefact-chooser-artefact.component.html',
  styleUrls: ['./artefact-chooser-artefact.component.scss'],
})
export class ArtefactChooserArtefactComponent implements OnInit {
  @Input()
  public artefact: IArtefact;
  @Input()
  public dark: boolean;
  constructor(public store: StoreService) {}

  public ngOnInit(): void {}
}
