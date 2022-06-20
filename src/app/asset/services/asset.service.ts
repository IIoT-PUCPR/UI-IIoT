import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asset } from '../model/asset.model';
import { environment } from 'src/environments/environment';
import { ODataResponse } from 'src/app/shared/interfaces/odata-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http: HttpClient) { }

  public getAssets(query?: string) {
    return this.http.get<ODataResponse<Asset>>(`${environment.apiEndpoint}/odata/Asset${query}`);
  }
}
