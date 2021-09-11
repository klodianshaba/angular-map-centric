import {MarkerInterface} from "./marker.model";
import {StatisticsInterface, StatisticsModel} from "./statistics.model";

export interface MapInterface {
  markers: MarkerInterface[];
  statistics: StatisticsInterface;
  loading: boolean;
}

export class MapModel implements MapInterface{
  markers: MarkerInterface[] = [];
  statistics: StatisticsModel = new StatisticsModel();
  loading: boolean = true;
  constructor(config?: MapInterface) {
    if(config) {
      this.markers = config.markers;
      this.statistics = config.statistics;
      this.loading = config.loading;
    }
  }
}
