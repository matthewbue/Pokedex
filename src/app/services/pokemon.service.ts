// src/app/services/pokemon.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllCards(){
    return this.http.get(`${this.apiUrl}`)
  }

}
