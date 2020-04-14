import { Injectable } from '@angular/core';
import { IArtefact } from '../models/IArtefact';
import { artefacts } from '../data/artefacts';
import { IComponent } from '../models/IComponent';
import { componentTypes } from '../data/componentTypes';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public chosenArtefacts: IArtefact[] = [];
  public neededMaterials: IComponent[] = [];
  public totalXp: number = 0;

  constructor() {}

  public addArtefact(p_artefact: IArtefact): void {
    p_artefact.quantity++;
    this.calculateTotals();
  }

  public calculateTotals(): void {
    this.chosenArtefacts = artefacts.filter((p_artefact: IArtefact) => {
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

  public removeOwnedMaterials(p_event?: MouseEvent): void {
    for (const w_key in componentTypes) {
      if (componentTypes.hasOwnProperty(w_key)) {
        const w_type = componentTypes[w_key];
        w_type.owned = null;
        w_type.done = false;
      }
    }
    if (p_event) {
      p_event.preventDefault();
      p_event.stopPropagation();
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

  public resetArtefacts(): void {
    artefacts.forEach((p_artefact: IArtefact) => {
      p_artefact.quantity = 0;
    });
    this.calculateTotals();
  }
}
