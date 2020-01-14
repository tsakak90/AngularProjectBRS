import { TestBed } from '@angular/core/testing';

import { NewBugServiceService } from './new-bug-service.service';

describe('NewBugServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewBugServiceService = TestBed.get(NewBugServiceService);
    expect(service).toBeTruthy();
  });
});
