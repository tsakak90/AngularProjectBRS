import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BugInsertingComponent } from './reporting-bugs/bug-inserting/bug-inserting.component';
import { ReportListofBugsComponent } from './reporting-bugs/report-listof-bugs/report-listof-bugs.component';

const routes: Routes = [
  {path: '', component: ReportListofBugsComponent},
  {path: 'bug-inserting', component: BugInsertingComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
