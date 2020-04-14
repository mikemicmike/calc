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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public darkMode: boolean = false;
  public byFaction: boolean = true;
  public hasOwnedMaterials: boolean = false;
  public search: string;
  public artefacts: IArtefact[] = artefacts;
  public data: {
    artefacts: IArtefact[];
    label: string;
    color: string;
    collapsed: boolean;
    levelReq: number;
    icon: string;
  }[];

  public constructor(public store: StoreService) {}

  public changeByFaction(p_byFaction: boolean): void {
    this.byFaction = p_byFaction;
    this.buildData();
  }

  public toggleComplete(p_componentType: any): void {
    p_componentType.done = !p_componentType.done;
  }
  public toggleDarkMode(p_darkMode: boolean): void {
    this.darkMode = p_darkMode;
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
          const a_artefactsToAdd = this.artefacts.filter((p_artefact) => {
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
          const a_artefactsToAdd = this.artefacts.filter((p_artefact) => {
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
