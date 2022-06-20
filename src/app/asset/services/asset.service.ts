import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asset } from '../model/asset.model';
import { environment } from 'src/environments/environment';
import { ODataResponse } from 'src/app/shared/interfaces/odata-response.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http: HttpClient) { }

  public getAssets(query?: string) {
    return this.http.get<ODataResponse<Asset>>(`${environment.apiEndpoint}/odata/Asset${query}`);
  }

  public getAssetById(id: string, query?: string) {
    return this.http.get<ODataResponse<Asset>>(`${environment.apiEndpoint}/odata/Asset/${id}${query}`).pipe(map(x => {
      return x.value[0];
    }));
  }

  public getAssetPowerConsumption(id: string, start: number, end: number) {
    return this.http.get<number>(`${environment.apiEndpoint}/api/Asset/${id}/GetPowerConsumption/${start}/${end}`)
  }
}
