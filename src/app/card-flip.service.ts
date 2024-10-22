import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardFlipService {
  private flipStates: { [id: number]: boolean } = {};

  toggleFlip(cardId: number): void {
    this.flipStates[cardId] = !this.flipStates[cardId];
  }

  isFlipped(cardId: number): boolean {
    return !!this.flipStates[cardId];
  }
}