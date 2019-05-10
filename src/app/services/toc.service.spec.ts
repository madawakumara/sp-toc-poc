import { TestBed } from '@angular/core/testing';

import { TocService } from './toc.service';

describe('TocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TocService = TestBed.get(TocService);
    expect(service).toBeTruthy();
  });
});
