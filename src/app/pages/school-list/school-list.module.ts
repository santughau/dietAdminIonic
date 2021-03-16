import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolListPageRoutingModule } from './school-list-routing.module';

import { SchoolListPage } from './school-list.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    SchoolListPageRoutingModule,
  ],
  declarations: [SchoolListPage],
})
export class SchoolListPageModule {}
