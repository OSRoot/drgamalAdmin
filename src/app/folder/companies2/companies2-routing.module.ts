import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Companies2Page } from './companies2.page';

const routes: Routes = [
  {
    path: '',
    component: Companies2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Companies2PageRoutingModule {}
