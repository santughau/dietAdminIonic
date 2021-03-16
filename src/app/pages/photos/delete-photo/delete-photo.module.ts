import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletePhotoPageRoutingModule } from './delete-photo-routing.module';

import { DeletePhotoPage } from './delete-photo.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule, 
    Ng2SearchPipeModule, 
    FormsModule,
    IonicModule,
    DeletePhotoPageRoutingModule,
  ],
  declarations: [DeletePhotoPage],
})
export class DeletePhotoPageModule {}
