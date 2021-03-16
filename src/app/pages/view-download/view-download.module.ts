import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDownloadPageRoutingModule } from './view-download-routing.module';

import { ViewDownloadPage } from './view-download.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    ViewDownloadPageRoutingModule
  ],
  declarations: [ViewDownloadPage]
})
export class ViewDownloadPageModule {}
