import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewNoticePageRoutingModule } from './view-notice-routing.module';

import { ViewNoticePage } from './view-notice.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    ViewNoticePageRoutingModule
  ],
  declarations: [ViewNoticePage]
})
export class ViewNoticePageModule {}
