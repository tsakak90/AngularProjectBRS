import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugInsertingComponent } from './bug-inserting.component';

describe('BugInsertingComponent', () => {
  let component: BugInsertingComponent;
  let fixture: ComponentFixture<BugInsertingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugInsertingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugInsertingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
