import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteVideoPageRoutingModule } from './delete-video-routing.module';

import { DeleteVideoPage } from './delete-video.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    DeleteVideoPageRoutingModule,
  ],
  declarations: [DeleteVideoPage],
})
export class DeleteVideoPageModule {}
