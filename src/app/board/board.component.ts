import { Component, OnInit } from '@angular/core';
import { Board } from './board';
import { Card } from '../card/card';
import { DataService } from '../data.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cards: Array<Card>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchBoardConfig()
      .then((config: Board) => {
        this.cards = config.board;
      });
  }
}
