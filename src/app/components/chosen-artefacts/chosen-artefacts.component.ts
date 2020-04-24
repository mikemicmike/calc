import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/store.service';
import { IArtefact } from 'src/app/models/IArtefact';

@Component({
  selector: 'app-chosen-artefacts',
  templateUrl: './chosen-artefacts.component.html',
  styleUrls: ['./chosen-artefacts.component.scss'],
})
export class ChosenArtefactsComponent implements OnInit {
  public chosenArtefacts: IArtefact[];
  public totalXp: number = 0;
  public isOutfit: string = 'none';
  public isRelic: boolean = false;
  constructor(public store: StoreService) {}

  public ngOnInit(): void {
    this.store.getChosenArtefacts$().subscribe((p_artefacts) => {
      this.totalXp = 0;
      p_artefacts.forEach((p_artefact) => {
        this.totalXp += p_artefact.quantity * p_artefact.xp;
      });
      this.getTotalXP();
      this.chosenArtefacts = p_artefacts;
    });
  }

  public toggleisrelic() {
    this.isRelic = !this.isRelic;
  }

  public onchangedowndown(value) {
    this.isOutfit = value;
  }

  public getTotalXP(): number {
    if (this.isOutfit === 'outfit' && this.isRelic) {
      return 1.08 * this.totalXp;
    }
    if (this.isOutfit === 'outfit' && !this.isRelic) {
      return 1.06 * this.totalXp;
    }
    if (this.isOutfit === 'none' && this.isRelic) {
      return 1.02 * this.totalXp;
    }

    return this.totalXp;
  }
}
