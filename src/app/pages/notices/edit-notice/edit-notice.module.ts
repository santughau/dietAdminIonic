import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditNoticePageRoutingModule } from './edit-notice-routing.module';

import { EditNoticePage } from './edit-notice.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    EditNoticePageRoutingModule
  ],
  declarations: [EditNoticePage]
})
export class EditNoticePageModule {}
