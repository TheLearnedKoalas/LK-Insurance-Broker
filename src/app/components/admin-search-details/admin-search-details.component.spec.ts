import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSearchDetailsComponent } from './admin-search-details.component';

describe('AdminSearchDetailsComponent', () => {
  let component: AdminSearchDetailsComponent;
  let fixture: ComponentFixture<AdminSearchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSearchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
