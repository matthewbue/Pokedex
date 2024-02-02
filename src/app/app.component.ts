import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import DeckListComponent from './components/deck-list/deck-list.component';
import { IgxButtonModule } from 'igniteui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, DeckListComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pokemon-tcg-deck-builder';
}
