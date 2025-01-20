import { Component, output } from '@angular/core';
import { LanguageModalService } from '../../../language-modal.service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(private languageModalService: LanguageModalService) {}

  openModal(): void {
    this.languageModalService.emitMenuEvent(true);
  }
}
