import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { DeckService } from '../../services/deck.service';

@Component({
  selector: 'app-deck-list',
  standalone: true,
  imports: [RouterOutlet ,RouterModule, CommonModule],
  templateUrl: './deck-list.component.html',
  styleUrl: './deck-list.component.scss'
})
export default class DeckListComponent implements OnInit {
  @Output() showDetails: EventEmitter<number> = new EventEmitter<number>();

  decks: any;

  constructor(private deckService: DeckService, private router: Router) {}

  ngOnInit(): void {
    this.deckService.getDecks().subscribe((response) =>{
      this.decks = response
      console.log("|",this.decks)
    })
  }

  navigateToDeckDetails(deckId: number): void {
    this.showDetails.emit(deckId);
  }

  loadDecks(): void {
    this.deckService.getDecks().subscribe((decks) => {
      this.decks.cards = decks;
      console.log(decks);
    });
  }

  addToDeck (deckId: number): void {
    this.deckService.addDeck(deckId);
    this.loadDecks();
  }

  removeDeck(deckId: number): void {
    this.deckService.removeDeck(deckId);
    this.loadDecks();
  }
}

