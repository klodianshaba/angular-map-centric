import {AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, Subject} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps';
import {MarkerInterface, MarkerModel} from "../../../../shared/models/marker.model";
import {DateService} from "../../../../shared/services/date.service";
import {Store} from "@ngrx/store";
import {State} from "../../../../state/reducers";
import {selectMap, selectMapLoading} from "../../../../state/selectors/map.selectors";
import {MapModel} from "../../../../shared/models/map.model";
import {updateLoading, updateMap} from "../../../../state/actions/map.actions";
import {MapInfoMarkerComponent} from "../map-info-marker/map-info-marker.component";
import {DefaultCenter, DefaultRandom, DefaultBounds} from "../../../../configs/map.config";

@Component({
  selector: 'app-map-centric',
  templateUrl: './map-centric.component.html',
  styleUrls: ['./map-centric.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapCentricComponent implements OnInit {
  @ViewChild('infoMarker', {static: false}) infoMarker: MapInfoMarkerComponent | undefined;
  @ViewChild(GoogleMap, { static: false }) set googleMap(m: GoogleMap) {
    if (m) {
      this.initDrawingManager(m);
    }
  }
  apiLoaded: Observable<boolean>;
  center: google.maps.LatLngLiteral = DefaultCenter;
  zoom = 6;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  map: MapModel = new MapModel();
  drawingManager: any;
  startTime: any;
  markerClustererImagePath = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';

  constructor(httpClient: HttpClient, public date: DateService, private store: Store<State>, private cdr: ChangeDetectorRef) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAWkEGdOFwUlG5izC20NkqXgibubeksqHY&libraries=drawing', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );

    this.store.select(selectMap).subscribe(map => {
      if(map){
        this.map = map;
      }
    });

  }
  ngOnInit(): void {
    this.generateMarkers();
  }

  addMarker(event: google.maps.MapMouseEvent): void {
    // this.markers.push(event.latLng.toJSON());
  }

  initDrawingManager(map: GoogleMap): void {
    const drawingOptions = {
      drawingMode: google.maps.drawing.OverlayType.RECTANGLE,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP,
        drawingModes: [
          google.maps.drawing.OverlayType.RECTANGLE,
        ],
      }
    };
    this.drawingManager = new google.maps.drawing.DrawingManager(drawingOptions);
    this.drawingManager.setMap(map.googleMap);
    this.drawingManager.setDrawingMode(null);

    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (event: google.maps.drawing.OverlayCompleteEvent) => {
      event.overlay.setMap(null);
      this.drawingManager.setDrawingMode(null);
      this.infoMarker?.closeWindow();
      switch (event.type) {
        case google.maps.drawing.OverlayType.RECTANGLE:
          this.generateMarkers(event.overlay.getBounds());
          break;
        default:
          break;
      }
    });
  }

  generateMarkers(bounds?: google.maps.LatLngBounds ): void{
    this.startTime = performance.now();
    this.store.dispatch(updateLoading({loading: true}));
    let boundsLiteral: google.maps.LatLngBoundsLiteral = (bounds) ? bounds.toJSON() : DefaultBounds;
    let markers: MarkerModel[] = [];
    const randomArray: Array<number> = this.generateRandomArray();
    randomArray.forEach(item => {
      let lat = boundsLiteral.north + (Math.random() * (boundsLiteral.south - boundsLiteral.north));
      let lng = boundsLiteral.west + (Math.random() * (boundsLiteral.east - boundsLiteral.west));
      markers.push({position :{lng,lat} , createdAt: this.date.toUTC()});
    });
    this.store.dispatch(updateMap({map: {markers: markers, statistics: {pins: randomArray.length ,allPins: this.getAllPins(randomArray.length) , renderingTime : this.getRenderingTime()}, loading: false }}))
    this.center = (bounds) ? bounds.getCenter().toJSON(): DefaultCenter;
    this.cdr.detectChanges();
  }

  generateRandomArray(): Array<number>{
    return [...Array(Math.floor(Math.random() * (DefaultRandom.max - DefaultRandom.min + 1) + DefaultRandom.min)).keys() ];
  }

  getRenderingTime(): string {
    const endTime = performance.now();
    return (endTime - this.startTime).toFixed(2) + ' ms';
  }

  getAllPins(pins: number): number {
    return this.map.statistics.allPins + pins;
  }

  trackByFn(index: any, item: any) {
    return index; // or item.id
  }

}
