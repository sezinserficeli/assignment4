import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() intervalUsed = new EventEmitter<number>();

  interval: any;

  finalNumber = 0;

  startCounting() {
    this.interval = setInterval(() => {
      this.intervalUsed.emit(this.finalNumber + 1);
      this.finalNumber++;
    }, 500);
  }

  stopCounting() {
    clearInterval(this.interval);
  }
}
