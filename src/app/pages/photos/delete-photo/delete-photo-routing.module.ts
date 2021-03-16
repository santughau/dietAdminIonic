import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletePhotoPage } from './delete-photo.page';

const routes: Routes = [
  {
    path: '',
    component: DeletePhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletePhotoPageRoutingModule {}
