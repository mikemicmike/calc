import { Component, OnInit, Input } from '@angular/core';
import { IArtefact } from 'src/app/models/IArtefact';
import { StoreService } from 'src/app/core/store.service';

@Component({
  selector: 'app-chosen-artefact',
  templateUrl: './chosen-artefact.component.html',
  styleUrls: ['./chosen-artefact.component.scss'],
})
export class ChosenArtefactComponent implements OnInit {
  @Input()
  public artefact: IArtefact;
  @Input()
  public dark: boolean;
  constructor(public store: StoreService) {}

  public ngOnInit(): void {}
}
