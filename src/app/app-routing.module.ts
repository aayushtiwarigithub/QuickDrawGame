import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'play-game',
    loadChildren:() => import ('./play-game/play-game.module').then(m=>m.PlayGameModule),
  }, 
  {
    path: 'create-dataset',
    loadChildren:() => import ('./create-dataset/create-dataset.module').then(m=>m.CreateDatasetModule),
    // canLoad:[AuthenticationGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
