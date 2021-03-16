import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteNoticePage } from './delete-notice.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteNoticePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteNoticePageRoutingModule {}
