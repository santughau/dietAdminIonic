import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteVideoPage } from './delete-video.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteVideoPageRoutingModule {}
