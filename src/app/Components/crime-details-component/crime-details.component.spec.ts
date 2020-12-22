import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CrimesService } from '../../Services/crimes-service/crimes.service';
import { CrimeDetailsComponent } from './crime-details.component';

describe('CrimeDetailsComponent', () => {
  let component: CrimeDetailsComponent;
  let fixture: ComponentFixture<CrimeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimeDetailsComponent ] ,
      providers:    [ {provide: CrimesService} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
