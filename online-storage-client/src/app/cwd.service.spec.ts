import { TestBed } from '@angular/core/testing';

import { CwdService } from './cwd.service';

describe('CwdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CwdService = TestBed.get(CwdService);
    expect(service).toBeTruthy();
  });
});
