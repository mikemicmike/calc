import { Component, OnInit } from '@angular/core';
import { componentTypes } from './data/componentTypes';
import { artefacts } from './data/artefacts';
import { factions } from './data/factions';
import { collections } from './data/collections';
import { HttpClient } from '@angular/common/http';
import { xptables } from './data/xptables';
import { IArtefact } from './models/IArtefact';
import { IComponent } from './models/IComponent';
import { StoreService } from './core/store.service';
import { IArtefactChooserSection } from './models/IArtefactChooserSection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public darkMode: boolean = false;
  public hasOwnedMaterials: boolean = false;
  public artefacts: IArtefact[] = artefacts;
  public data: IArtefactChooserSection[];

  public constructor(public store: StoreService) {}

  public toggleDarkMode(p_darkMode: boolean): void {
    this.darkMode = p_darkMode;
  }

  public ngOnInit(): void {}
}
