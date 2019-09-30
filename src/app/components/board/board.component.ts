import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @Input() public searchName: string;

  public items = [
    {
      id:1,
      title: "Backlog",
      tasks: [
        {
          taskName: "Task 1"
        },
        {
          taskName: "Task 2"
        },
        {
          taskName: "Task 3"
        }
      ]
    },
    {
      id:2,
      title: "In progress",
      tasks: [
        {
          taskName: "Task 4"
        },
        {
          taskName: "Task 5"
        }
      ]
    },
    {
      id:3,
      title: "Done",
      tasks: [
        {
          taskName: "Task 6"
        }
      ]
    }
  ];

  public removeCard({list, item}) {
    const index = list.findIndex(existingCard => existingCard.taskName === item.taskName);
    list.splice(index, 1);
  }

}
