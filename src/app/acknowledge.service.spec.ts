import { TestBed } from '@angular/core/testing';

import { AcknowledgeService } from './acknowledge.service';

describe('AcknowledgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcknowledgeService = TestBed.get(AcknowledgeService);
    expect(service).toBeTruthy();
  });
});
