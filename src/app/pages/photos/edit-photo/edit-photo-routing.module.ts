import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPhotoPage } from './edit-photo.page';

const routes: Routes = [
  {
    path: '',
    component: EditPhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPhotoPageRoutingModule {}
