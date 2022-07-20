import {Component, OnInit} from '@angular/core';
import {UsersService} from "./service/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  makers:{ lat: number[]; long: number[]; name: string[]; lastName: string[] }[]

  constructor(private userService:UsersService) {
   this.makers = userService.markers
  }

  ngOnInit(): void {
    this.userService.pushLocation()
  }

}
