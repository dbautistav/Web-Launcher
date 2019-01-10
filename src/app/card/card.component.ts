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
   *   - finish 'link-list.component'
   *   - GET config.json, load it and process it
   *   - ? customize and save changes to local storage
   *   - ? export/import customizations
   */

  //    TODO: finish this!
  // see: vsavkin.com/angular-router-understanding-redirects-2826177761fc
  // see: medium.com/@adrianfaciu/using-the-angular-router-to-navigate-to-external-links-15cc585b7b88  
  openUrl() {
    //  FIXME!!
    window.location.href = this.card.url;
  }
}
