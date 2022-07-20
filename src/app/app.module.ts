import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './maps/map/map.component';
import { MapControlComponent } from './maps/map-control/map-control.component';
import { INIT_COORDS } from './maps/token';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: INIT_COORDS, useValue: {lat: 41.393, long: 76.003}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
