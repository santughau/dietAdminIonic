import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDownloadPageRoutingModule } from './edit-download-routing.module';

import { EditDownloadPage } from './edit-download.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    EditDownloadPageRoutingModule
  ],
  declarations: [EditDownloadPage]
})
export class EditDownloadPageModule {}
