import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFormNoticePage } from './edit-form-notice.page';

const routes: Routes = [
  {
    path: '',
    component: EditFormNoticePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFormNoticePageRoutingModule {}
