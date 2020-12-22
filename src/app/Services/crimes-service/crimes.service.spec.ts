import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Crime } from '../../Interfaces/Crime';
import { CrimeStatus } from '../../Interfaces/CrimeStatus';
import { CrimesService } from './crimes.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CrimesService', () => {
  let service: CrimesService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(CrimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

/*beforeEach(() => {
  // TODO: spy on other methods too
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  service = new CrimesService(httpClientSpy as any);
});

it('should return expected crimes (HttpClient called once)', () => {
  const expectedCrimes: Crime[] =
    [{ category: 'A',
      persistent_id: 'A',
      location_subtype: 'A',
      id: 'A',
      location: 'A',
      context: 'A',
      month: 08-2020,
      location_type: 'A',
      outcome_status: {category: 'A', date: 08-2020},
    },
     {  category: 'A',
      persistent_id: 'A',
      location_subtype: 'A',
      id: 'A',
      location: 'A',
      context: 'A',
      month: 08-2020,
      location_type: 'A',
      outcome_status: {category: 'A', date: 08-2020},
     }];

});

it('should return an error when the server returns a 404', () => {
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404, statusText: 'Not Found'
  });
});})*/
