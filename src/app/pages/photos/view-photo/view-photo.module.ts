import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPhotoPageRoutingModule } from './view-photo-routing.module';

import { ViewPhotoPage } from './view-photo.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    ViewPhotoPageRoutingModule
  ],
  declarations: [ViewPhotoPage]
})
export class ViewPhotoPageModule {}
