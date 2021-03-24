import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDatasetRoutingModule } from './create-dataset-routing.module';
import { CreateDatasetComponent } from './create-dataset/create-dataset.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';
import { MaterialModule } from '../material/material.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ClassListDialogComponent } from './class-list-dialog/class-list-dialog.component';
import { AddClassDialogComponent } from './add-class-dialog/add-class-dialog.component';

@NgModule({
  declarations: [CreateDatasetComponent, HelpDialogComponent, ClassListDialogComponent, AddClassDialogComponent],
  entryComponents:[HelpDialogComponent],
  imports: [
    CommonModule,
    CreateDatasetRoutingModule,
    MaterialModule,
    SidebarModule,
    MatInputModule,
    FormsModule,
    FilterPipeModule,
    ReactiveFormsModule ],
})
export class CreateDatasetModule { }
