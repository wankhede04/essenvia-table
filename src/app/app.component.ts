import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tables: Array<number> = [1];

  constructor() {}

  public addTable() {
    this.tables.push(this.tables[this.tables.length - 1] + 1);
  }
}
