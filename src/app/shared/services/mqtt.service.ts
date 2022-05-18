import { Injectable } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MqttAssetService {

  private endpoint: string;

  constructor(
  ) {
    this.endpoint = 'telimetry';
  }

}
