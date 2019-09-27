import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @Input() public searchName: string;

  public statuses = [
    {
      id:1,
      title: "Backlog",
      tasks: []
    },
    {
      id:2,
      title: "In progress",
      tasks: []
    },
    {
      id:3,
      title: "Done",
      tasks: []
    }
  ];

  public removeStatus(status: any) {
    const index = this. statuses.findIndex(existingStatus => existingStatus.id === status.id);
    this.statuses.splice(index, 1);
  }
}
