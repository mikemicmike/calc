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
  constructor(public store: StoreService) {}

  public ngOnInit(): void {
    this.store.getChosenArtefacts$().subscribe((p_artefacts) => {
      this.totalXp = 0;
      p_artefacts.forEach((p_artefact) => {
        this.totalXp += p_artefact.quantity * p_artefact.xp;
      });
      this.chosenArtefacts = p_artefacts;
    });
  }
}
