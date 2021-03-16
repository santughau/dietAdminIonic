import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteDownloadPage } from './delete-download.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteDownloadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteDownloadPageRoutingModule {}
