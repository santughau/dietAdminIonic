import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFormDownloadPage } from './edit-form-download.page';

const routes: Routes = [
  {
    path: '',
    component: EditFormDownloadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFormDownloadPageRoutingModule {}
