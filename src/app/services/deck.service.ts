
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

interface PokemonDetails {
  card: {
    id: string;
    name: string;
    imageUrl: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private apiUrl = environment.apiUrl;
  private decks: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public decks$: Observable<any[]> = this.decks.asObservable();
  private deck: any[] = [];

  constructor(private http: HttpClient) {
    this.loadDeckFromStorage();
  }

  private loadDeckFromStorage(): void {
    const storedDeck = localStorage.getItem('deck');
    this.deck = storedDeck ? JSON.parse(storedDeck) : [];
  }

  private saveDeckToStorage(): void {
    localStorage.setItem('deck', JSON.stringify(this.deck));
  }

  getAllDecks(): any[] {
    const decksString = localStorage.getItem('decks');
    return decksString ? JSON.parse(decksString) : [];
  }

  addToDeck(cardId: number): void {
    const decks = this.getAllDecks();
    decks.push({ cardId });
    localStorage.setItem('decks', JSON.stringify(decks));
  }

  getDecks(){
    return this.http.get(`${this.apiUrl}`)
  }

  getPokeDetails(deckId: number | null): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.apiUrl}/${deckId}`)
  }

  addDeck(deck: any): void {
    const currentDecks = this.decks.getValue();
    this.decks.next([...currentDecks, deck]);
    console.log(this.decks)

  }

  removeDeck(deckId: number): void {
    const updatedDecks = this.decks.getValue().filter((deck) => deck.id !== deckId);
    this.decks.next(updatedDecks);
    console.log(this.decks)
  }
}
