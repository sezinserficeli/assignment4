import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  evens: number[] = [];
  odds: number[] = [];

  onIntervalUsed(lastnum: number) {
    if (lastnum % 2 === 0) {
      this.evens.push(lastnum);
    } else {
      this.odds.push(lastnum);
    }
  }
}
