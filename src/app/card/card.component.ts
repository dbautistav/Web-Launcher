import { Component, OnInit, Input } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor() { }

  ngOnInit() {
    if (!this.card.iconSource) {
      this.card.iconSource = `https://png.icons8.com/color/${this.card.iconKey}`;
    }
    this.card.url = this.card.url || '#';
  }

  /**
   * TODOs:
   *   - click card header/body and open url!
   *   - finish 'link-list.component'
   *   - GET config.json, load it and process it
   *   - ? customize and save changes to local storage
   *   - ? export/import customizations
   */
}
