import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFormPhotoPage } from './edit-form-photo.page';

const routes: Routes = [
  {
    path: '',
    component: EditFormPhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFormPhotoPageRoutingModule {}
