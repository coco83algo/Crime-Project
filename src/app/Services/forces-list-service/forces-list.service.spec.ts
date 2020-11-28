import { TestBed } from '@angular/core/testing';

import { ForcesListService } from './forces-list.service';

describe('ForcesListService', () => {
  let service: ForcesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForcesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
