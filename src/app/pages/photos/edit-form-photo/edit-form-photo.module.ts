import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFormPhotoPageRoutingModule } from './edit-form-photo-routing.module';

import { EditFormPhotoPage } from './edit-form-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFormPhotoPageRoutingModule
  ],
  declarations: [EditFormPhotoPage]
})
export class EditFormPhotoPageModule {}
