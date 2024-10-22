// src/app/card/card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() page: any;
  isFlipped = false;

  toggleCard() {
    this.isFlipped = !this.isFlipped;
  }
}
