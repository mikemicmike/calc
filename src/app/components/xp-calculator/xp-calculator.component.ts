import { Component, OnInit } from '@angular/core';
import { IArtefact } from 'src/app/models/IArtefact';
import { artefacts } from 'src/app/data/artefacts';
import { factions } from 'src/app/data/factions';
import { xptables } from 'src/app/data/xptables';

@Component({
  selector: 'app-xp-calculator',
  templateUrl: './xp-calculator.component.html',
  styleUrls: ['./xp-calculator.component.scss'],
})
export class XpCalculatorComponent implements OnInit {
  public byLevel: boolean = true;
  public currentXp: number;
  public currentLevel: number;
  public fetchingPlayer: boolean = false;
  public neededArtefacts: {
    level: number;
    quantity: number;
  }[] = [];
  public outfitPieces: number;
  public playerName: string;
  public targetLevel: number;
  public targetXp: number;
  public xpCalcCollapsed: boolean = true;
  public xpModifier: number = 1;
  constructor() {}

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

  public currentXpChanged(): void {
    this.currentLevel = this.getLevelForXp(this.currentXp);
    this.recalculateNeededArtefacts();
  }
  public getHighestLevelArtefact(p_level: number): IArtefact {
    for (let x_artefact = artefacts.length - 1; x_artefact > 0; x_artefact--) {
      const w_artefact = artefacts[x_artefact];
      if (
        p_level >= w_artefact.level &&
        w_artefact.faction !== factions.miscelaneous.id
      ) {
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
        quantity: (w_neededXp * 0.8) / (w_artefact.xp * this.xpModifier),
      });
      w_currentMaxLevelHandled = x_index;
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
      quantity: (w_neededXp2 * 0.8) / (w_artefact2.xp * this.xpModifier),
    });
  }

  public swapTarget(p_event: MouseEvent): void {
    this.byLevel = !this.byLevel;
    p_event.preventDefault();
    p_event.stopPropagation();
  }

  public targetXpChanged(): void {
    this.targetLevel = this.getLevelForXp(this.targetXp);
    this.recalculateNeededArtefacts();
  }
  public targetLevelChanged(): void {
    this.targetXp = xptables[this.targetLevel - 1];
    this.recalculateNeededArtefacts();
  }

  public toggleXpCalcCollapse(): void {
    this.xpCalcCollapsed = !this.xpCalcCollapsed;
  }

  async updatePlayerXP(): Promise<void> {
    this.fetchingPlayer = true;
    const { experience } = await getPlayerArchaeology(this.playerName);

    this.currentXp = experience;
    this.currentXpChanged();
    this.fetchingPlayer = false;
  }

  public ngOnInit(): void {}
}
