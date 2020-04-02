import { Component } from '@angular/core';
import { componentTypes } from './componentTypes';
import { Artefacts } from './artefacts';

interface IComponent {
  type: any;
  quantity: number;
}
interface IArtefact {
  label: string;
  components: IComponent[];
  quantity: number;
  collections: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public chosenArtefacts: IArtefact[] = [];
  public neededMaterials: IComponent[] = [];
  public artefacts: IArtefact[] = Artefacts;

  public addArtefact(p_artefact: IArtefact): void {
    p_artefact.quantity++;
    this._calculateTotals();
  }
  public removeArtefact(p_artefact: IArtefact): void {
    p_artefact.quantity--;
    this._calculateTotals();
  }
  public reset(): void {
    this.artefacts.forEach((p_artefact: IArtefact) => {
      p_artefact.quantity = 0;
    });
    this._calculateTotals();
  }
  private _calculateTotals(): void {
    this.chosenArtefacts = this.artefacts.filter((p_artefact: IArtefact) => {
      return p_artefact.quantity > 0;
    });
    const w_neededMaterials = {};
    this.chosenArtefacts.forEach((p_artefact: IArtefact) => {
      p_artefact.components.forEach((p_component) => {
        if (!w_neededMaterials[p_component.type.id]) {
          w_neededMaterials[p_component.type.id] = { ...p_component };
          w_neededMaterials[p_component.type.id].quantity = 0;
        }
        w_neededMaterials[p_component.type.id].quantity +=
          p_component.quantity * p_artefact.quantity;
      });
    });
    console.log(w_neededMaterials);
    this.neededMaterials = [];
    for (const w_key in w_neededMaterials) {
      if (w_neededMaterials.hasOwnProperty(w_key)) {
        const w_neededMat = w_neededMaterials[w_key];
        this.neededMaterials.push(w_neededMat);
      }
    }
  }
}
