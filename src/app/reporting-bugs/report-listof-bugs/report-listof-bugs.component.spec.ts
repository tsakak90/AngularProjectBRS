import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListofBugsComponent } from './report-listof-bugs.component';

describe('ReportListofBugsComponent', () => {
  let component: ReportListofBugsComponent;
  let fixture: ComponentFixture<ReportListofBugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportListofBugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportListofBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
