import { Component, OnInit } from '@angular/core';
import Card from '../../models/Card';
import User from '../../models/User';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit, Card {
  id: number;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: User;

  constructor() { }

  ngOnInit() {
  }

}
