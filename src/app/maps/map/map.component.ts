import {AfterViewInit, Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';
import * as L from 'leaflet';
import * as esri from 'esri-leaflet';
import {MapIconOptions} from "../data/map-icon-option";
import {INIT_COORDS} from "../token";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input()
  public markers!: { lat: number[], long: number[], name: string[], lastName: string[] }[];
  public currentWidth: number;
  public currentHeight: number;
  protected baseLayer: any;
  protected map: any;

  @ViewChild('primaryMap', {static: true}) protected mapDivRef!: ElementRef;
  protected mapDiv!: HTMLDivElement;


  constructor(@Inject(INIT_COORDS) protected _initCoords: { lat: number, long: number }) {
    this.baseLayer = null;
    this.currentWidth = 1200;
    this.currentHeight = 600;
  }

  ngOnInit(): void {
    this.mapDiv = this.mapDivRef.nativeElement;
    this.__renderMap();
    this.__showMarkers();
  }

  ngAfterViewInit(): void {
    this.map.invalidateSize();
  }

  __showMarkers(): void {
    const icon = L.icon({
      iconUrl: MapIconOptions.mapIcon,
      iconSize: MapIconOptions.iconSize,
      iconAnchor: MapIconOptions.iconAnchor,
      shadowSize: MapIconOptions.shadowSize,
      shadowAnchor: MapIconOptions.shadowAnchor,
    });
    const n: number = this.markers.length;
    let i: number, m: L.Marker, lat: number[], long: number[], name: string[], lastName: string[];
    for (i = 0; i < n; ++i) {
      lat = this.markers[i].lat;
      long = this.markers[i].long;
      name = this.markers[i].name;
      lastName = this.markers[i].lastName;
      for (let i = 0; i < lat.length; i++) {
        m = L.marker([lat[i], long[i]], {icon: icon}).addTo(this.map);
        let names = name[i]
          m.bindPopup(name[i]).openPopup()


      }

    }
  }

  private __renderMap(): void {
    this.map = L.map(this.mapDiv, {
      zoomControl: true,
      zoomAnimation: true,
      trackResize: true,
      boxZoom: true,
    }).setView([this._initCoords.lat, this._initCoords.long], 15);
    this.baseLayer = esri.basemapLayer('Streets');
    this.map.addLayer(this.baseLayer);
  }

}
