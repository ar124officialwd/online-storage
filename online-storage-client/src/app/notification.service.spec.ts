import { TestBed } from '@angular/core/testing';

import { NotificiationService } from './notification.service';

describe('NotificiationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificiationService = TestBed.get(NotificiationService);
    expect(service).toBeTruthy();
  });
});
