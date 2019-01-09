import { Component, OnInit, Input } from '@angular/core';
import { LinkItem } from './link-item';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  @Input() linkList: Array<LinkItem>;

  constructor() { }

  ngOnInit() { }

}
