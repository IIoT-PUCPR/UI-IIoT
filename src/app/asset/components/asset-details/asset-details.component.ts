import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { Asset } from '../../model/asset.model';
import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.scss']
})
export class AssetDetailsComponent implements OnInit {

  asset?: Asset;

  constructor(private assetService: AssetService, private route: ActivatedRoute) {
    const assetId = this.route.snapshot.paramMap.get('id');
    this.assetService.getAssetById(assetId!, '?$expand=Sector($expand=Local)').subscribe((response: Asset) => {
      this.asset = response;
    });
  }

  ngOnInit(): void {
  }

}
