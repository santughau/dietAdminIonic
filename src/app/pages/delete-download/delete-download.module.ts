import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteDownloadPageRoutingModule } from './delete-download-routing.module';

import { DeleteDownloadPage } from './delete-download.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    DeleteDownloadPageRoutingModule
  ],
  declarations: [DeleteDownloadPage]
})
export class DeleteDownloadPageModule {}
