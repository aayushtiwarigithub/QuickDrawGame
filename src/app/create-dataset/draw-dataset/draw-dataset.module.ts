import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawDatasetRoutingModule } from './draw-dataset-routing.module';
import { DrawDatasetComponent } from './draw-dataset.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SidebarModule } from 'src/app/sidebar/sidebar.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';


@NgModule({
  declarations: [DrawDatasetComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SidebarModule,
    MatInputModule,
    FormsModule,
    FilterPipeModule,
    ReactiveFormsModule,
    DrawDatasetRoutingModule
  ]
})
export class DrawDatasetModule { }
