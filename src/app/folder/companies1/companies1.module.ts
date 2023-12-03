import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Companies1PageRoutingModule } from './companies1-routing.module';

import { Companies1Page } from './companies1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Companies1PageRoutingModule
  ],
  declarations: [Companies1Page]
})
export class Companies1PageModule {}
