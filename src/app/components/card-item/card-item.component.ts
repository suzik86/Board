import { Component, Input, Output, EventEmitter } from '@angular/core';
import Card from '../../models/Card';
import User from '../../models/User';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements Card {
  id: number;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: User;

  @Input() item: Card;
  @Input() isDone: boolean;
  @Output() remove = new EventEmitter<Card>();

  public onRemove() {
    this.remove.emit(this.item)
  }
}
