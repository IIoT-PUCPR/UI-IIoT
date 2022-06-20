import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetDetailsComponent } from './components/asset-details/asset-details.component';
import { AssetComponent } from './components/asset-list/asset.component';

const routes: Routes = [
  {
    path: '',
    component: AssetComponent
  },
  {
    path: ':id',
    component: AssetDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }
