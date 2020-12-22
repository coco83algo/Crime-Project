import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ForcesListService } from './forces-list.service';

describe('ForcesListService', () => {
  let service: ForcesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ForcesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
