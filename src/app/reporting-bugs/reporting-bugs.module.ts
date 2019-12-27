import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListofBugsComponent } from './report-listof-bugs/report-listof-bugs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BugInsertingComponent } from './bug-inserting/bug-inserting.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ReportListofBugsComponent, BugInsertingComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ReportListofBugsComponent,
    BugInsertingComponent
  ]
})
export class ReportingBugsModule { }
