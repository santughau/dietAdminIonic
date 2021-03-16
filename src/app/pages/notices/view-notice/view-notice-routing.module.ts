import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewNoticePage } from './view-notice.page';

const routes: Routes = [
  {
    path: '',
    component: ViewNoticePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewNoticePageRoutingModule {}
