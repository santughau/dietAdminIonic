import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditVideoPageRoutingModule } from './edit-video-routing.module';

import { EditVideoPage } from './edit-video.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    EditVideoPageRoutingModule,
  ],
  declarations: [EditVideoPage],
})
export class EditVideoPageModule {}
