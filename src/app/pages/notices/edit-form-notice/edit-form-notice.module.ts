import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFormNoticePageRoutingModule } from './edit-form-notice-routing.module';

import { EditFormNoticePage } from './edit-form-notice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFormNoticePageRoutingModule
  ],
  declarations: [EditFormNoticePage]
})
export class EditFormNoticePageModule {}
