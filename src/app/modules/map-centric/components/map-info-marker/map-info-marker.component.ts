import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DateService} from "../../../../shared/services/date.service";
import {MapInfoWindow, MapMarker} from "@angular/google-maps";
import {MarkerInterface, MarkerModel} from "../../../../shared/models/marker.model";
import {heartBeat, heartBeatKeyframe} from "../../../../shared/animations/heartBeat";
import {animate, keyframes, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-map-info-marker',
  templateUrl: './map-info-marker.component.html',
  styleUrls: ['./map-info-marker.component.scss'],
  animations: []
})
export class MapInfoMarkerComponent implements OnInit {

  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow | undefined;
  @Input('label') label: string = 'Marker Info'
  public marker: MarkerModel = new MarkerModel({ position : {lat: 13, lng: 13} , createdAt: this.date.toUTC() });

  constructor(public date: DateService) { }

  ngOnInit(): void {}

  openWindow(mapMarker: MapMarker , marker: MarkerInterface ): void {
    this.marker = marker;
    this.infoWindow?.open(mapMarker);
  }

  closeWindow(): void {
    this.infoWindow?.close();
  }

}
