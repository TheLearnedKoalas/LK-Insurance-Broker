import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInsurancesComponent } from './user-insurances.component';

describe('UserInsurancesComponent', () => {
  let component: UserInsurancesComponent;
  let fixture: ComponentFixture<UserInsurancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInsurancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInsurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
