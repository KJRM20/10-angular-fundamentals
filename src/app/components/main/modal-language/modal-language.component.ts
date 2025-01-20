import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-language',
  imports: [CommonModule],
  templateUrl: './modal-language.component.html',
  styleUrl: './modal-language.component.scss'
})
export class ModalLanguageComponent {
  isModalVisible = false;

  openModal() : void {
    this.isModalVisible = true;
  }

  closeModal() : void {
    this.isModalVisible = false;
  }
}
