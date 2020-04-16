import { Component, OnInit } from '@angular/core';
import { IComponent } from 'src/app/models/IComponent';
import { StoreService } from 'src/app/core/store.service';
import { componentTypes } from 'src/app/data/componentTypes';

@Component({
  selector: 'app-owned-materials',
  templateUrl: './owned-materials.component.html',
  styleUrls: ['./owned-materials.component.scss'],
})
export class OwnedMaterialsComponent implements OnInit {
  public componentTypes: typeof componentTypes = componentTypes;
  public neededMaterials: IComponent[];

  constructor(public store: StoreService) {}

  public ngOnInit(): void {
    this.store.getNeededMaterials$().subscribe((p_neededMaterials) => {
      this.neededMaterials = p_neededMaterials;
    });
  }
}
