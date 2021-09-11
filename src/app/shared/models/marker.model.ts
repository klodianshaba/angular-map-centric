export interface MarkerInterface {
  position: google.maps.LatLngLiteral;
  createdAt: Date;
}

export class MarkerModel implements MarkerInterface{
  position: google.maps.LatLngLiteral;
  createdAt: Date;
  constructor(config: MarkerInterface) {
    this.position = config.position;
    this.createdAt = config.createdAt;
  }
}
