import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  lat: number[] = []
  long: number[] = []
  public markers: { lat: number[], long: number[] }[];

  constructor() {
    this.markers = [
      {lat: this.lat, long: this.long},
    ];
  }

  ngOnInit(): void {
    this.pushLocation()
    console.log(this.randomName())
    console.log(this.markers)

  }

  pushLocation() {
    let index: number = 0
    while (index < 10) {
      this.lat.push(this.randomLocation(40, 50, 5))
      this.long.push(this.randomLocation(41, 50, 8))
      index += 1
    }
  }

  randomLocation = (from: any, to: number, fixed: number) => {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }
  randomName(){
    return  Math. random(). toString(25). substr(1, 7);
  }

}
