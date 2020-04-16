import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreService } from 'src/app/core/store.service';
import { IArtefactChooserSection } from 'src/app/models/IArtefactChooserSection';
import { factions } from 'src/app/data/factions';
import { collections } from 'src/app/data/collections';
import { artefacts } from 'src/app/data/artefacts';

@Component({
  selector: 'app-artefact-chooser',
  templateUrl: './artefact-chooser.component.html',
  styleUrls: ['./artefact-chooser.component.css'],
})
export class ArtefactChooserComponent implements OnInit {
  public byFaction: boolean = true;
  public data: IArtefactChooserSection[] = [];
  public search: string;

  @Input()
  public darkMode: boolean = true;

  constructor(public store: StoreService) {}

  public changeByFaction(p_byFaction: boolean): void {
    this.byFaction = p_byFaction;
  }

  public filterResults(): void {
    this.buildData();
  }

  public buildData(): void {
    this.data = [];
    if (this.byFaction) {
      for (const w_key in factions) {
        if (factions.hasOwnProperty(w_key)) {
          const w_faction = factions[w_key];
          const a_artefactsToAdd = artefacts.filter((p_artefact) => {
            if (this.search) {
              return (
                p_artefact.faction === w_faction.id &&
                p_artefact.label
                  .toLowerCase()
                  .indexOf(this.search.toLowerCase()) > -1
              );
            }
            return p_artefact.faction === w_faction.id;
          });
          if (a_artefactsToAdd.length) {
            this.data.push({
              label: w_faction.label,
              color: w_faction.color,
              artefacts: a_artefactsToAdd,
              collapsed: !this.search,
              levelReq: w_faction.levelReq,
              icon: w_faction.icon,
            });
          }
        }
      }
    } else {
      for (const w_key in collections) {
        if (collections.hasOwnProperty(w_key)) {
          const w_collection = collections[w_key];
          const a_artefactsToAdd = artefacts.filter((p_artefact) => {
            if (this.search) {
              return (
                p_artefact.collections.indexOf(w_collection.id) >= 0 &&
                p_artefact.label
                  .toLowerCase()
                  .indexOf(this.search.toLowerCase()) >= 0
              );
            }
            return p_artefact.collections.indexOf(w_collection.id) >= 0;
          });
          if (a_artefactsToAdd.length) {
            this.data.push({
              label: w_collection.label,
              color: w_collection.collector.color,
              artefacts: a_artefactsToAdd,
              collapsed: !this.search,
              levelReq: w_collection.levelReq,
              icon: w_collection.collector.image,
            });
          }
        }
      }
      this.data.sort((p_item1: any, p_item2: any): number => {
        return p_item1.levelReq - p_item2.levelReq;
      });
    }
  }

  public ngOnInit(): void {
    this.buildData();
  }
}
