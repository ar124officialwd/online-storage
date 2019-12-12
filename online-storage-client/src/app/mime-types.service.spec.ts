import { TestBed } from '@angular/core/testing';

import { MimeTypesService } from './mime-types.service';

describe('MimeTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MimeTypesService = TestBed.get(MimeTypesService);
    expect(service).toBeTruthy();
  });
});
