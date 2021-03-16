import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSchoolPageRoutingModule } from './add-school-routing.module';

import { AddSchoolPage } from './add-school.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSchoolPageRoutingModule
  ],
  declarations: [AddSchoolPage]
})
export class AddSchoolPageModule {}
