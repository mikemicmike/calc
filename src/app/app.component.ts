import { Component, OnInit } from '@angular/core';
import { componentTypes } from './data/componentTypes';
import { artefacts } from './data/artefacts';
import { factions } from './data/factions';
import { collections } from './data/collections';
import { HttpClient } from '@angular/common/http';
import { xptables } from './data/xptables';
import { IArtefact } from './models/IArtefact';
import { IComponent } from './models/IComponent';
import { StoreService } from './core/store.service';
import { IArtefactChooserSection } from './models/IArtefactChooserSection';
import { GrandExchangeService } from './core/grand-exchange.service';
import { UtilsService } from './core/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public darkMode: boolean = false;
  public hasOwnedMaterials: boolean = false;
  public isRelic: boolean = false;
  public outfitPieces: string = '0';
  public artefacts: IArtefact[] = artefacts;
  public data: IArtefactChooserSection[];

  public constructor(
    public store: StoreService,
    private grandExchange: GrandExchangeService,
    private utils: UtilsService
  ) {}

  public toggleDarkMode(p_darkMode: boolean): void {
    this.darkMode = p_darkMode;
    localStorage.setItem('darkMode', this.darkMode.toString());
  }

  public isRelicChanged(): void {
    localStorage.setItem('isRelic', this.isRelic.toString());
  }

  public outfitPiecesChanged(): void {
    localStorage.setItem('outfitPieces', this.outfitPieces);
  }
  public ngOnInit(): void {
    this.darkMode = localStorage.getItem('darkMode') === 'true';
    this.isRelic = localStorage.getItem('isRelic') === 'true';
    this.outfitPieces = localStorage.getItem('outfitPieces');
    let x_count = 0;
    for (const w_key in componentTypes) {
      if (componentTypes.hasOwnProperty(w_key)) {
        const w_type = componentTypes[w_key];
        const w_localStorageQtyVal = localStorage.getItem(
          'ownedMatQty' + w_type.id
        );
        const w_localStorageOwnedVal = localStorage.getItem(
          'ownedMatDone' + w_type.id
        );
        if (w_localStorageQtyVal) {
          w_type.owned = w_localStorageQtyVal;
        }
        w_type.done = w_localStorageOwnedVal === 'true';

        // if (w_type.geId) {
        //   setTimeout(() => {
        //     this.grandExchange
        //       .getGePrice(w_type.geId)
        //       .subscribe((p_results) => {
        //         if (!p_results) {
        //           console.log(
        //             'AppComponent -> ngOnInit -> p_results',
        //             w_type.id,
        //             p_results
        //           );
        //         }
        //         w_type.price = this.utils.convertRSPriceToNumber(
        //           p_results.item.current.price
        //         );
        //       });
        //   }, x_count * 2000);
        // }
        x_count++;
      }
    }
  }
}
