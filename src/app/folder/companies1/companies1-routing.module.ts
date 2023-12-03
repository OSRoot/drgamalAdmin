import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Companies1Page } from './companies1.page';

const routes: Routes = [
  {
    path: '',
    component: Companies1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Companies1PageRoutingModule {}
