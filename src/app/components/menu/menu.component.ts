import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule

  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export default class MenuComponent {
  singleModel: boolean = false;
  imagePath: string = "../../../assets/cards-banner2.png"

  constructor(private router: Router) { }

  mountDecks() {
    this.router.navigate(["create-deck"]);
  }

  viewPokes() {
    this.router.navigate(["deck-list"]);
  }

}
