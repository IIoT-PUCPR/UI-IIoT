import { Component, OnInit } from '@angular/core';
import { Asset } from '../../model/asset.model';
import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  assets: Asset[] | undefined;
  displayedColumns: string[] = ['name', 'sector', 'local', 'actions']

  constructor(private assetService: AssetService) { }

  ngOnInit(): void {
    this.assetService.getAssets('?$expand=Sector($expand=Local)').subscribe(assets => {
      this.assets = assets.value;
    });
  }

}
