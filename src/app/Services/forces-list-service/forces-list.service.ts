import { Injectable } from '@angular/core';
import { Force } from '../../Interfaces/Force';
import { FORCELIST } from '../../Interfaces/complete-force-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForcesListService {

  constructor() { }
  getForces(): Observable<Force[]> {
    return of(FORCELIST);
  }
}
