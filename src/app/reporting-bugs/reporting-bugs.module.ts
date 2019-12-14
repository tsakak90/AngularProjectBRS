import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListofBugsComponent } from './report-listof-bugs/report-listof-bugs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ReportListofBugsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    ReportListofBugsComponent
  ]
})
export class ReportingBugsModule { }
