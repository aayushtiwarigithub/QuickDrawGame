import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawDatasetComponent } from './draw-dataset.component';

const routes: Routes = [
  {
    path: '',
    component: DrawDatasetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawDatasetRoutingModule { }
