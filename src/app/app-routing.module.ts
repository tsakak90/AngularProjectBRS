import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path: 'parenta', component: ParentaComponent, children: [ {path: 'childa', component: ChildaComponent}]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
