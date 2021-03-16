import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDownloadPage } from './edit-download.page';

const routes: Routes = [
  {
    path: '',
    component: EditDownloadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDownloadPageRoutingModule {}
