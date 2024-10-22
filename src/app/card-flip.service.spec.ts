import { TestBed } from '@angular/core/testing';

import { CardFlipService } from './card-flip.service';

describe('CardFlipService', () => {
  let service: CardFlipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardFlipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
