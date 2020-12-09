import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceOfficersComponent } from './force-officers.component';

describe('ForceOfficersComponent', () => {
  let component: ForceOfficersComponent;
  let fixture: ComponentFixture<ForceOfficersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForceOfficersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceOfficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
