import { Component, OnInit } from '@angular/core';
import { componentTypes } from './componentTypes';
import { Artefacts } from './artefacts';
import { factions } from './factions';
import { collections } from './collections';

interface IComponent {
  type: any;
  quantity: number;
  originalComponent?: any;
}
interface IArtefact {
  label: string;
  components: IComponent[];
  quantity: number;
  collections: string[];
  xp: number;
  level: number;
  faction: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public componentTypes: typeof componentTypes = componentTypes;
  public darkMode: boolean = false;
  public byFaction: boolean = true;
  public hasOwnedMaterials: boolean = false;
  public search: string;
  public totalXp: number = 0;
  public chosenArtefacts: IArtefact[] = [];
  public neededMaterials: IComponent[] = [];
  public artefacts: IArtefact[] = Artefacts;
  public data: {
    artefacts: IArtefact[];
    label: string;
    color: string;
    collapsed: boolean;
    levelReq: number;
  }[];

  public toggleDarkMode(p_darkMode: boolean): void {
    this.darkMode = p_darkMode;
  }
  public addArtefact(p_artefact: IArtefact): void {
    p_artefact.quantity++;
    this.calculateTotals();
  }
  public changeByFaction(p_byFaction: boolean): void {
    this.byFaction = p_byFaction;
    this.buildData();
  }
  public resetArtefacts(): void {
    this.artefacts.forEach((p_artefact: IArtefact) => {
      p_artefact.quantity = 0;
    });
    this.calculateTotals();
  }
  public removeOwnedMaterials(): void {
    for (const w_key in this.componentTypes) {
      if (this.componentTypes.hasOwnProperty(w_key)) {
        const w_type = this.componentTypes[w_key];
        w_type.owned = 0;
      }
    }
  }
  public removeArtefact(p_artefact: IArtefact): void {
    p_artefact.quantity--;
    this.calculateTotals();
  }
  public calculateTotals(): void {
    this.chosenArtefacts = this.artefacts.filter((p_artefact: IArtefact) => {
      return p_artefact.quantity > 0;
    });
    const w_neededMaterials = {};
    this.totalXp = 0;
    this.chosenArtefacts.forEach((p_artefact: IArtefact) => {
      p_artefact.components.forEach((p_component) => {
        if (!w_neededMaterials[p_component.type.id]) {
          w_neededMaterials[p_component.type.id] = { ...p_component };
          w_neededMaterials[p_component.type.id].quantity = 0;
          w_neededMaterials[
            p_component.type.id
          ].originalComponent = p_component;
        }
        w_neededMaterials[p_component.type.id].quantity +=
          p_component.quantity * p_artefact.quantity;
      });
      this.totalXp += p_artefact.xp * p_artefact.quantity;
    });
    this.neededMaterials = [];
    for (const w_key in w_neededMaterials) {
      if (w_neededMaterials.hasOwnProperty(w_key)) {
        const w_neededMat = w_neededMaterials[w_key];
        this.neededMaterials.push(w_neededMat);
      }
    }
  }

  public markComplete(p_componentType: any): void {
    p_componentType.done = true;
  }

  public unmarkComplete(p_componentType: any): void {
    p_componentType.done = false;
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
              levelReq: w_faction.levelReq
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
              levelReq: w_collection.levelReq
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
