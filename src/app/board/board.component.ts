import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  private cards: Array<Card>;

  constructor() { }

  ngOnInit() {
    /**
     * TODO:
     *   - GET config.json, load it and process it
     */
    const cards: Array<Card> = [ ];

    this.cards = cards;
  }
}
