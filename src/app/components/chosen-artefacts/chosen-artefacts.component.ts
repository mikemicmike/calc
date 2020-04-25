import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/store.service';
import { IArtefact } from 'src/app/models/IArtefact';

@Component({
  selector: 'app-chosen-artefacts',
  templateUrl: './chosen-artefacts.component.html',
  styleUrls: ['./chosen-artefacts.component.scss'],
})
export class ChosenArtefactsComponent implements OnInit {
  public calculatedXp: number;
  public chosenArtefacts: IArtefact[];
  public totalXp: number = 0;
  public outfitPieces: string = '0';
  public isRelic: boolean = false;
  constructor(public store: StoreService) {}

  public ngOnInit(): void {
    this.store.getChosenArtefacts$().subscribe((p_artefacts) => {
      this.totalXp = 0;
      p_artefacts.forEach((p_artefact) => {
        this.totalXp += p_artefact.quantity * p_artefact.xp;
      });
      this.recalculateXp();
      this.chosenArtefacts = p_artefacts;
    });
  }

  public recalculateXp(): void {
    this.calculatedXp = this.getTotalXP();
  }

  public getTotalXP(): number {
    let w_bonusXp: number = 0;
    if (this.isRelic) {
      w_bonusXp += this.totalXp * 0.02;
    }
    switch (this.outfitPieces) {
      case '1':
        w_bonusXp += this.totalXp * 0.01;
        break;
      case '2':
        w_bonusXp += this.totalXp * 0.02;
        break;
      case '3':
        w_bonusXp += this.totalXp * 0.03;
        break;
      case '4':
        w_bonusXp += this.totalXp * 0.04;
        break;
      case '5':
        w_bonusXp += this.totalXp * 0.06;
        break;

      default:
        break;
    }

    return this.totalXp + w_bonusXp;
  }
}
