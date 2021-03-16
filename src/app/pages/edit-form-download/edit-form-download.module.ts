import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFormDownloadPageRoutingModule } from './edit-form-download-routing.module';

import { EditFormDownloadPage } from './edit-form-download.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFormDownloadPageRoutingModule
  ],
  declarations: [EditFormDownloadPage] 
})
export class EditFormDownloadPageModule {}
