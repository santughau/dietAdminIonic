import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSchoolPage } from './add-school.page';

const routes: Routes = [
  {
    path: '',
    component: AddSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSchoolPageRoutingModule {}
