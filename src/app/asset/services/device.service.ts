import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ODataResponse } from 'src/app/shared/interfaces/odata-response.interface';
import { environment } from 'src/environments/environment';
import { Device } from '../model/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  public getDevicesByAsset(assetId: string): Observable<ODataResponse<Device>> {
    if (!assetId || assetId === '') {
      return of();
    }

    const query = `?$filter=IdAsset eq ${assetId}&expand=Sensors`;
    return this.http.get<ODataResponse<Device>>(`${environment.apiEndpoint}/odata/Device${query}`)
  }
}
