import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteNoticePageRoutingModule } from './delete-notice-routing.module';

import { DeleteNoticePage } from './delete-notice.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    DeleteNoticePageRoutingModule
  ],
  declarations: [DeleteNoticePage]
})
export class DeleteNoticePageModule {}
