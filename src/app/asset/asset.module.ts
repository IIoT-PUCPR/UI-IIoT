import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from './components/asset-list/asset.component';
import { AssetRoutingModule } from './asset-routing.module';
import { AssetDetailsComponent } from './components/asset-details/asset-details.component';
import { SharedModule } from '../shared/shared.module';
import { DeviceSensorsComponent } from './components/asset-details/components/device-sensors/device-sensors.component';
import { AssetConsumptionComponent } from './components/asset-details/components/asset-consumption/asset-consumption.component';

@NgModule({
  declarations: [
    AssetComponent,
    AssetDetailsComponent,
    DeviceSensorsComponent,
    AssetConsumptionComponent
  ],
  imports: [
    CommonModule,
    AssetRoutingModule,
    SharedModule
  ]
})
export class AssetModule { }
