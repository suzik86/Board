import { Component, Input, Output, EventEmitter } from '@angular/core';
import Card from "../../models/Card"
import CardList from '../../models/CardList';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent implements CardList {
  id: number;
  name: string;
  cards: Card[];

  @Input() public statusCard: Card;
  @Output() public remove = new EventEmitter<Card>();

  public onRemove() {
    this.remove.emit(this.statusCard);
  }
}
