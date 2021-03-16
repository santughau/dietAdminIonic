import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewVideosPageRoutingModule } from './view-videos-routing.module';

import { ViewVideosPage } from './view-videos.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    ViewVideosPageRoutingModule,
  ],
  providers: [YoutubeVideoPlayer],
  declarations: [ViewVideosPage],
})
export class ViewVideosPageModule {}
