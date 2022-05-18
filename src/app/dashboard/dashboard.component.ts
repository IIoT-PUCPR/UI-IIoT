import { Component, OnInit } from '@angular/core';
import { IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { MqttAssetService } from '../shared/services/mqtt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  subscription: Subscription | undefined = undefined;
  current: number = 0.543;
  temperature: number = 9.8;
  amount: number = 36.57

  constructor(private readonly eventMqtt: MqttAssetService) { }

  ngOnInit(): void {
    setInterval(() => {
        this.current = this.getRandomArbitrary(0, 2);
        this.temperature = this.getRandomArbitrary(9.5, 9.8);
        this.amount += 0.001
    }, 1000);
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  private subscribeToTopic() {
  }

}
