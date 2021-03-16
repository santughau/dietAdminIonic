import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFormVideoPage } from './edit-form-video.page';

const routes: Routes = [
  {
    path: '',
    component: EditFormVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFormVideoPageRoutingModule {}
