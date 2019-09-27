import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public searchName: string;

  public onSearch(criterion: string) {
    this.searchName = criterion;

    console.log(this.searchName);
  };


}
