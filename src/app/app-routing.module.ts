import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'asset',
    loadChildren: () => import('./asset/asset.module').then(m => m.AssetModule)
  },
  {
    path: '',
    redirectTo: 'asset',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
