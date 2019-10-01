import { Component, Input, Output, EventEmitter } from '@angular/core';
import Card from '../../models/Card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent  {
  expanded: boolean = false;

  @Input() item: Card;
  @Input() isDone: boolean;
  @Output() remove = new EventEmitter<Card>();

  public onRemove() {
    this.remove.emit(this.item)
  }

  public changeDisplay() {
    if(this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = true;
    }
  }
}
