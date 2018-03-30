import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubOrgCreateComponent } from './sub-org-create.component';

describe('SubOrgCreateComponent', () => {
  let component: SubOrgCreateComponent;
  let fixture: ComponentFixture<SubOrgCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubOrgCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubOrgCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
