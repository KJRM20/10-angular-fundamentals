import { Component } from '@angular/core';
import { ModalLanguageComponent } from "./modal-language/modal-language.component";
import { HeroComponent } from "./hero/hero.component";
import { FeaturesComponent } from "./features/features.component";
import { CardsComponent } from "./cards/cards.component";

@Component({
  selector: 'app-main',
  imports: [ModalLanguageComponent, HeroComponent, FeaturesComponent, CardsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
