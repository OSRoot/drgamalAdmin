import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Companies2PageRoutingModule } from './companies2-routing.module';

import { Companies2Page } from './companies2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Companies2PageRoutingModule
  ],
  declarations: [Companies2Page]
})
export class Companies2PageModule {}
