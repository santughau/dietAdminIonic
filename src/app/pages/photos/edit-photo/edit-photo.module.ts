import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPhotoPageRoutingModule } from './edit-photo-routing.module';

import { EditPhotoPage } from './edit-photo.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    EditPhotoPageRoutingModule
  ],
  declarations: [EditPhotoPage]
})
export class EditPhotoPageModule {}
