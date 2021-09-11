import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapCentricRoutingModule } from './map-centric-routing.module';
import { MapCentricComponent } from './components/map-centric/map-centric.component';
import { MapStatisticsComponent } from './components/map-statistics/map-statistics.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { SharedModule } from "../../shared/shared.module";
import { MapInfoMarkerComponent } from './components/map-info-marker/map-info-marker.component';
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [
    MapCentricComponent,
    MapStatisticsComponent,
    MapInfoMarkerComponent
  ],
  imports: [
    CommonModule,
    MapCentricRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    SharedModule,
    MaterialModule,
  ]
})
export class MapCentricModule { }
