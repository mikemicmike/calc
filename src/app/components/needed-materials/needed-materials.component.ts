import { Component, OnInit } from '@angular/core';
import { componentTypes } from 'src/app/data/componentTypes';
import { IComponent } from 'src/app/models/IComponent';
import { StoreService } from 'src/app/core/store.service';

@Component({
  selector: 'app-needed-materials',
  templateUrl: './needed-materials.component.html',
  styleUrls: ['./needed-materials.component.scss'],
})
export class NeededMaterialsComponent implements OnInit {
  public componentTypes: typeof componentTypes = componentTypes;
  public neededMaterials: IComponent[];

  constructor(public store: StoreService) {}

  public toggleComplete(p_componentType: any): void {
    p_componentType.done = !p_componentType.done;
  }

  public ngOnInit(): void {
    this.store.getNeededMaterials$().subscribe((p_neededMaterials) => {
      this.neededMaterials = p_neededMaterials;
    });
  }
}
