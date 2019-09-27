import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  public searchName: string;
  @Output() public search = new EventEmitter<string>();

  public onSearch() {
    this.search.emit(this.searchName);
  };
}
