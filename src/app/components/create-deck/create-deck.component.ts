import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import DeckDetailsComponent from '../deck-details/deck-details.component';
import DeckListComponent from '../deck-list/deck-list.component';

@Component({
  selector: 'app-create-deck',
  standalone: true,
  imports: [DeckListComponent, DeckDetailsComponent, CommonModule],
  templateUrl: './create-deck.component.html',
  styleUrl: './create-deck.component.scss'
})
export default class CreateDeckComponent {
  selectedDeckId: number | null = null;

  showDeckDetails(deckId: number): void {
    this.selectedDeckId = deckId;
  }

  closeDeckDetails(): void {
    this.selectedDeckId = null;
  }

  imagePath: string = "../../../assets/cards-banner2.png"

}
