import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFormVideoPageRoutingModule } from './edit-form-video-routing.module';

import { EditFormVideoPage } from './edit-form-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFormVideoPageRoutingModule
  ],
  declarations: [EditFormVideoPage]
})
export class EditFormVideoPageModule {}
