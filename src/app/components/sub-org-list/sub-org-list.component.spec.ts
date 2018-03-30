import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubOrgListComponent } from './sub-org-list.component';

describe('SubOrgListComponent', () => {
  let component: SubOrgListComponent;
  let fixture: ComponentFixture<SubOrgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubOrgListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubOrgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
