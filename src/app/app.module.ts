import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChosenArtefactsComponent } from './components/chosen-artefacts/chosen-artefacts.component';
import { ArtefactChooserComponent } from './components/artefact-chooser/artefact-chooser.component';
import { ChosenArtefactComponent } from './components/chosen-artefact/chosen-artefact.component';
import { MaterialBankComponent } from './components/material-bank/material-bank.component';
import { XpCalculatorComponent } from './components/xp-calculator/xp-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialBankComponent,
    XpCalculatorComponent,
    ChosenArtefactsComponent,
    ArtefactChooserComponent,
    ChosenArtefactComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
