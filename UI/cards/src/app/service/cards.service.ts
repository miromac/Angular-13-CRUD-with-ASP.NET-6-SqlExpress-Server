import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseUrl = 'https://localhost:7193/api/cards';

  constructor(private http: HttpClient) { }

  // Get all cards
  getAllCards() {
    this.http.get(this.baseUrl);
  }
}
