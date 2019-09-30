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
          name: "Task 1",
          isDone: false,
          description: "Add project structure",
          dueDate: "October 17, 2019",
          assignee: {
            firstName: "Ivan",
            lastName: "Petrov"
          }
        },
        {
          name: "Task 2",
          isDone: false,
          description: "Get API key",
          dueDate: "October 07, 2019",
          assignee: {
            firstName: "Kate",
            lastName: "Petrova"
          }
        },
        {
          name: "Task 3",
          isDone: false,
          description: "Implement swipe for horizontal list",
          dueDate: "October 03, 2019",
          assignee: {
            firstName: "Inna",
            lastName: "Vetrov"
          }
        }
      ]
    },
    {
      id:2,
      title: "In progress",
      tasks: [
        {
          name: "Task 4",
          isDone: false,
          description: "Add the additional navigation buttons",
          dueDate: "October 05, 2019",
          assignee: {
            firstName: "Nina",
            lastName: "Ivanova"
          }
        },
        {
          name: "Task 5",
          isDone: false,
          description: "Add the tooltip with page number",
          dueDate: "October 10, 2019",
          assignee: {
            firstName: "Ira",
            lastName: "Sidorova"
          }
        }
      ]
    },
    {
      id:3,
      title: "Done",
      tasks: [
        {
          name: "Task 6",
          isDone: true,
          description: "Create search box",
          dueDate: "October 08, 2019",
          assignee: {
            firstName: "Ivan",
            lastName: "Petrov"
          }
        },
        {
          name: "Task 7",
          isDone: true,
          description: "Add support at least one mobile browser",
          dueDate: "October 02, 2019",
          assignee: {
            firstName: "Ivan",
            lastName: "Petrov"
          }
        },
        {
          name: "Task 8",
          isDone: true,
          description: "Your complete app should be uploaded to github pages ",
          dueDate: "October 11, 2019",
          assignee: {
            firstName: "Ivan",
            lastName: "Petrov"
          }
        }
      ]
    }
  ];

  public removeCard({list, item}) {
    const index = list.findIndex(existingCard => existingCard.name === item.name);
    list.splice(index, 1);
  }

}
