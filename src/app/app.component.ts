import { Component, OnInit } from '@angular/core';
import { componentTypes } from './componentTypes';
import { Artefacts } from './artefacts';
import { factions } from './factions';
import { collections } from './collections';
import { HttpClient } from '@angular/common/http';
import { xptables } from './xptables';

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
  public xpCalcCollapsed: boolean;
  public byLevel: boolean = true;
  public componentTypes: typeof componentTypes = componentTypes;
  public currentXp: number;
  public currentLevel: number;
  public outfitPieces: number;
  public targetLevel: number;
  public targetXp: number;
  public neededArtefacts: {
    level: number;
    quantity: number;
  }[] = [];
  public darkMode: boolean = false;
  public byFaction: boolean = true;
  public hasOwnedMaterials: boolean = false;
  public search: string;
  public totalXp: number = 0;
  public chosenArtefacts: IArtefact[] = [];
  public neededMaterials: IComponent[] = [];
  public artefacts: IArtefact[] = Artefacts;
  public xpModifier: number = 1;
  public data: {
    artefacts: IArtefact[];
    label: string;
    color: string;
    collapsed: boolean;
    levelReq: number;
  }[];

  public constructor(private _httpClient: HttpClient) {}

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
  public outfitPiecesChanged(): void {
    if (this.outfitPieces === 1) {
      this.xpModifier = 1.01;
    } else if (this.outfitPieces === 2) {
      this.xpModifier = 1.02;
    } else if (this.outfitPieces === 3) {
      this.xpModifier = 1.03;
    } else if (this.outfitPieces === 4) {
      this.xpModifier = 1.04;
    } else if (this.outfitPieces === 5) {
      this.xpModifier = 1.06;
    } else {
      this.xpModifier = 1;
    }
    this.recalculateNeededArtefacts();
  }

  public currentXpChanged(): void {
    this.currentLevel = this.getLevelForXp(this.currentXp);
    this.recalculateNeededArtefacts();
  }
  public targetXpChanged(): void {
    this.targetLevel = this.getLevelForXp(this.targetXp);
    this.recalculateNeededArtefacts();
  }
  public targetLevelChanged(): void {
    this.targetXp = xptables[this.targetLevel - 1];
    this.recalculateNeededArtefacts();
  }
  public recalculateNeededArtefacts(): void {
    this.neededArtefacts = [];
    if (!this.targetXp) {
      return;
    }
    if (this.targetXp < this.currentXp) {
      return;
    }
    if (this.currentLevel < 5) {
      return;
    }
    let w_currentMaxLevelHandled = 0;
    for (
      let x_index = this.currentLevel;
      x_index < this.targetLevel - 1;
      x_index++
    ) {
      const w_artefact = this.getHighestLevelArtefact(x_index);
      let w_neededXp = 0;
      if (x_index === this.currentLevel) {
        w_neededXp = this.getXpToNextLevel(this.currentXp);
      } else {
        w_neededXp = this.getXpToNextLevel(xptables[x_index - 1]);
      }
      this.addArtefactsToNeededArtefacts({
        level: w_artefact.level,
        quantity: (w_neededXp * 0.8) / (w_artefact.xp * this.xpModifier)
      });
      w_currentMaxLevelHandled = x_index;
      console.log(
        'AppComponent -> recalculateNeededArtefacts -> w_currentMaxLevelHandled',
        w_currentMaxLevelHandled
      );
    }
    //Manage last level (will also pick up 120 from here)¸
    let w_neededXp2 = 0;
    if (!w_currentMaxLevelHandled) {
      w_neededXp2 = this.targetXp - this.currentXp;
    } else {
      w_neededXp2 = this.targetXp - xptables[w_currentMaxLevelHandled];
    }
    const w_artefact2 = this.getHighestLevelArtefact(this.targetLevel - 1);
    this.addArtefactsToNeededArtefacts({
      level: w_artefact2.level,
      quantity: (w_neededXp2 * 0.8) / (w_artefact2.xp * this.xpModifier)
    });
  }

  public addArtefactsToNeededArtefacts(p_neededArtefact: {
    quantity: number;
    level: number;
  }): void {
    for (let x_needed = 0; x_needed < this.neededArtefacts.length; x_needed++) {
      const w_neededArtefact = this.neededArtefacts[x_needed];
      if (w_neededArtefact.level === p_neededArtefact.level) {
        w_neededArtefact.quantity += p_neededArtefact.quantity;
        return;
      }
    }
    this.neededArtefacts.push(p_neededArtefact);
  }

  public getHighestLevelArtefact(p_level: number): IArtefact {
    for (
      let x_artefact = this.artefacts.length - 1;
      x_artefact > 0;
      x_artefact--
    ) {
      const w_artefact = this.artefacts[x_artefact];
      if (p_level >= w_artefact.level) {
        return w_artefact;
      }
    }
  }

  public getLevelForXp(p_xp: number): number {
    for (let x_table = 0; x_table < xptables.length; x_table++) {
      const w_currentLevelMin = xptables[x_table];
      const w_currentLevelMax = xptables[x_table + 1];
      if (!w_currentLevelMax) {
        return xptables.length;
      }
      if (p_xp >= w_currentLevelMin && p_xp < w_currentLevelMax) {
        return x_table + 1;
      }
    }
  }
  public getXpToNextLevel(p_xp: number): number {
    return xptables[this.getLevelForXp(p_xp)] - p_xp;
  }
  public toggleXpCalcCollapse(): void {
    this.xpCalcCollapsed = !this.xpCalcCollapsed;
  }
  public swapTarget(p_event: MouseEvent): void {
    this.byLevel = !this.byLevel;
    p_event.preventDefault();
    p_event.stopPropagation();
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
        w_type.owned = null;
        w_type.done = false;
      }
    }
  }
  public removeArtefact(p_artefact: IArtefact): void {
    p_artefact.quantity--;
    this.calculateTotals();
  }
  public resetAll(): void {
    this.resetArtefacts();
    this.removeOwnedMaterials();
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
