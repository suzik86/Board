import { Component, OnInit } from '@angular/core';
import Card from "../../models/Card"
import CardList from '../../models/CardList';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent implements OnInit, CardList {
  id: number;
  name: string;
  cards: Card[];

  constructor() { }

  ngOnInit() {
  }

}
