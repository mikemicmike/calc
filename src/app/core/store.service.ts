import { Injectable } from '@angular/core';
import { IArtefact } from '../models/IArtefact';
import { artefacts } from '../data/artefacts';
import { IComponent } from '../models/IComponent';
import { componentTypes } from '../data/componentTypes';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _chosenArtefacts: IArtefact[] = [];
  private _neededMaterials: IComponent[] = [];
  private _chosenArtefacts$: BehaviorSubject<IArtefact[]> = new BehaviorSubject(
    this._chosenArtefacts
  );
  private _neededMaterials$: BehaviorSubject<
    IComponent[]
  > = new BehaviorSubject(this._neededMaterials);

  constructor() {
    artefacts.forEach((p_artefact) => {
      const w_quantity: string = localStorage.getItem('chosen' + p_artefact.id);
      if (w_quantity) {
        p_artefact.quantity = Number(w_quantity);
      }
    });
    this.calculateTotals();
  }

  public addArtefact(p_artefact: IArtefact): void {
    p_artefact.quantity++;
    this.calculateTotals();
    localStorage.setItem(
      'chosen' + p_artefact.id,
      p_artefact.quantity.toString()
    );
  }

  public calculateTotals(): void {
    this._chosenArtefacts = artefacts.filter((p_artefact: IArtefact) => {
      return p_artefact.quantity > 0;
    });
    const w_neededMaterials = {};
    this._chosenArtefacts.forEach((p_artefact: IArtefact) => {
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
    });
    this._neededMaterials = [];
    for (const w_key in w_neededMaterials) {
      if (w_neededMaterials.hasOwnProperty(w_key)) {
        const w_neededMat = w_neededMaterials[w_key];
        this._neededMaterials.push(w_neededMat);
      }
    }
    this._chosenArtefacts$.next(this._chosenArtefacts);
    this._neededMaterials$.next(this._neededMaterials);
  }

  public getChosenArtefacts$(): Observable<IArtefact[]> {
    return this._chosenArtefacts$.pipe(debounceTime(100));
  }
  public getNeededMaterials$(): Observable<IComponent[]> {
    return this._neededMaterials$.pipe(debounceTime(100));
  }

  public removeOwnedMaterials(p_event?: MouseEvent): void {
    for (const w_key in componentTypes) {
      if (componentTypes.hasOwnProperty(w_key)) {
        const w_type = componentTypes[w_key];
        w_type.owned = null;
        w_type.done = false;
        localStorage.removeItem('ownedMatQty' + w_type.id);
        localStorage.removeItem('ownedMatDone' + w_type.id);
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
    if (p_artefact.quantity) {
      localStorage.setItem(
        'chosen' + p_artefact.id,
        p_artefact.quantity.toString()
      );
    } else {
      localStorage.removeItem('chosen' + p_artefact.id);
    }
  }

  public resetAll(): void {
    this.resetArtefacts();
    this.removeOwnedMaterials();
  }

  public resetArtefacts(): void {
    artefacts.forEach((p_artefact: IArtefact) => {
      p_artefact.quantity = 0;
      localStorage.removeItem('chosen' + p_artefact.id);
    });
    this.calculateTotals();
  }

  public saveOwnedItems(): void {
    for (const w_key in componentTypes) {
      if (componentTypes.hasOwnProperty(w_key)) {
        const w_type = componentTypes[w_key];
        if (w_type.owned) {
          localStorage.setItem('ownedMatQty' + w_type.id, w_type.owned);
        }
        localStorage.setItem(
          'ownedMatDone' + w_type.id,
          w_type.done.toString()
        );
      }
    }
  }
}
