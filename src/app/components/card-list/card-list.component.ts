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

  @Input() public items: CardList[];
  @Input() searchName: string;
  @Output() public remove = new EventEmitter<any>();

  public onRemove(item: any) {
    this.remove.emit({
      list:this.items,
      item});
  }

}
