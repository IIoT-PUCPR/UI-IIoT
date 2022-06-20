import { Component, Input, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Asset } from 'src/app/asset/model/asset.model';
import { Device } from 'src/app/asset/model/device.model';
import { MQTTPayloadDto } from 'src/app/asset/model/mqtt-payload.dto';
import { DeviceService } from 'src/app/asset/services/device.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-device-sensors',
  templateUrl: './device-sensors.component.html',
  styleUrls: ['./device-sensors.component.scss']
})
export class DeviceSensorsComponent implements OnInit {

  @Input() asset!: Asset;

  devices?: Device[];
  deviceSensorValues?: MQTTPayloadDto;

  private hubConnection: HubConnection | undefined;

  constructor(private deviceService: DeviceService) {
    this.createConnection();
    this.registerOnServerEvents();
    this.startConnection();
  }

  public getSensorLastValue(channel: number) {
    return this.deviceSensorValues?.readings.find(reading => reading.channel === channel)?.value;
  }

  private createConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(`${environment.apiEndpoint}/telimetryStreaming`)
      .build();
  }

  private registerOnServerEvents() {
    this.hubConnection!.on('Message', (message: MQTTPayloadDto) => {
      this.deviceSensorValues = message;
    });
  }

  private async startConnection() {
    try {
      await this.hubConnection!.start()
      console.log('Hub connection started!')
    } catch (error) {
      setTimeout(() => {
        this.startConnection();
      }, 5000);
    }
  }

  ngOnInit(): void {
    this.deviceService.getDevicesByAsset(this.asset.Id)?.subscribe(response => {
      this.devices = response.value;
    });
  }

  public getSensorFooterStyle() {
    if (!this.deviceSensorValues) {
      return 'offline'
    }
    return 'online'
  }

}
