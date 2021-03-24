import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDatasetComponent } from './create-dataset/create-dataset.component';

const routes: Routes = [
  {
    path:'',
    component: CreateDatasetComponent,
  },
  {
    path:'draw-dataset',
    loadChildren:() => import ('./draw-dataset/draw-dataset.module').then(m=>m.DrawDatasetModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDatasetRoutingModule { }
