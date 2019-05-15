import { TestBed } from '@angular/core/testing';

import { SortarrayService } from './sortarray.service';

describe('SortarrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortarrayService = TestBed.get(SortarrayService);
    expect(service).toBeTruthy();
  });
});
