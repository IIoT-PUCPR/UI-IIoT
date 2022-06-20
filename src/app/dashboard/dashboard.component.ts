import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private hubConnection: HubConnection | undefined;

  current: number = 0.543;
  temperature: number = 9.8;
  amount: number = 36.57

  constructor() {
    this.createConnection();
    this.registerOnServerEvents();
    this.startConnection();
    
  }

  private createConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(`${environment.apiEndpoint}/telimetryStreaming`)
      .build();
  }

  private registerOnServerEvents() {
    this.hubConnection!.on('Message', (message: string) => {
      console.log(message);
    });
  }

  private async startConnection() {
    try {
      await this.hubConnection!.start()
      console.log('Hub connection started!')
      this.hubConnection!.send("userLoggedIn", "a")
              .then(() => console.log("something"));
    } catch (error) {
      console.log(error)
    }
  }

  ngOnInit(): void {
  }

}
