import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckService } from '../../services/deck.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deck-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.scss']
})
export default class DeckDetailsComponent implements OnChanges {
  @Input() deckId: number | null = null;
  @Output() closeDetails: EventEmitter<void> = new EventEmitter<void>();
  deckDetails: any;

  constructor(private deckService: DeckService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['deckId'] && !changes['deckId'].firstChange) {
      this.loadDeckDetails();
    }

    this.showStoredDecks()
  }

  ngOnInit(): void {
    this.loadDeckDetails();
  }

  showStoredDecks(): void {
    const storedDecks = this.deckService.getAllDecks();
    console.log('Decks no LocalStorage:', storedDecks);
  }

  addToDeck(): void {
    if (this.deckDetails && this.deckDetails.card) {
      this.deckService.addToDeck(this.deckDetails.card.id);
      this.closeDetails.emit();
    }
  }

  loadDeckDetails(): void {
    if (this.deckId !== null) {
      this.deckService.getPokeDetails(this.deckId).subscribe((data) => {
        this.deckDetails = data;
        console.log("Poke", data);
      });
    }
  }

  closeDetailsView(): void {
    this.closeDetails.emit();
  }
}
