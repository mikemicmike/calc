import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/store.service';
import { componentTypes } from 'src/app/data/componentTypes';

@Component({
  selector: 'app-material-bank',
  templateUrl: './material-bank.component.html',
  styleUrls: ['./material-bank.component.scss'],
})
export class MaterialBankComponent implements OnInit {
  public componentTypes: typeof componentTypes = componentTypes;
  public materialBankCollapsed: boolean = true;

  constructor(public storeService: StoreService) {}

  public toggleMaterialBank(): void {
    this.materialBankCollapsed = !this.materialBankCollapsed;
  }

  public removeOwnedMaterials(p_event: MouseEvent): void {
    p_event.stopPropagation();
    p_event.preventDefault();
    this.storeService.removeOwnedMaterials();
  }
  public ngOnInit(): void {}
}
