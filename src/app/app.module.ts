import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChosenArtefactsComponent } from './components/chosen-artefacts/chosen-artefacts.component';
import { ArtefactChooserComponent } from './components/artefact-chooser/artefact-chooser.component';
import { ArtefactChooserArtefactComponent } from './components/artefact-chooser-artefact/artefact-chooser-artefact.component';
import { MaterialBankComponent } from './components/material-bank/material-bank.component';
import { XpCalculatorComponent } from './components/xp-calculator/xp-calculator.component';
import { ArtefactChooserSectionComponent } from './components/artefact-chooser-section/artefact-chooser-section.component';
import { IntroTextComponent } from './components/intro-text/intro-text.component';
import { RequiredMaterialsComponent } from './components/required-materials/required-materials.component';
import { OwnedMaterialsComponent } from './components/owned-materials/owned-materials.component';
import { NeededMaterialsComponent } from './components/needed-materials/needed-materials.component';
import { DonationsComponent } from './components/donations/donations.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialBankComponent,
    XpCalculatorComponent,
    ChosenArtefactsComponent,
    ArtefactChooserComponent,
    ArtefactChooserArtefactComponent,
    ArtefactChooserSectionComponent,
    IntroTextComponent,
    RequiredMaterialsComponent,
    OwnedMaterialsComponent,
    NeededMaterialsComponent,
    DonationsComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
