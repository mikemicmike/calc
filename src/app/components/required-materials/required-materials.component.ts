import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/store.service';
import { IComponent } from 'src/app/models/IComponent';

@Component({
  selector: 'app-required-materials',
  templateUrl: './required-materials.component.html',
  styleUrls: ['./required-materials.component.scss'],
})
export class RequiredMaterialsComponent implements OnInit {
  public neededMaterials: IComponent[];

  constructor(public store: StoreService) {}

  public ngOnInit(): void {
    this.store.getNeededMaterials$().subscribe((p_neededMaterials) => {
      this.neededMaterials = p_neededMaterials;
    });
  }
}
