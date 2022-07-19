import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public markers: {lat: number, long: number}[];
  constructor() {
    this.markers = [
      { lat: 32.9756, long: -96.89   },
      { lat: 33.1543, long: -96.8352 },
      { lat: 32.93  , long: -96.8195 },
      { lat: 32.8998, long: -97.0403 },
      { lat: 33.0737, long: -96.3697 },
      { lat: 33.1014, long: -96.6744 }
    ];
  }
}
