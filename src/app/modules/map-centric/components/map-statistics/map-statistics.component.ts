import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../../../state/reducers";
import {selectMapLoading, selectMapStatistics} from "../../../../state/selectors/map.selectors";
import {StatisticsInterface, StatisticsModel} from "../../../../shared/models/statistics.model";
import {NumberService} from "../../../../shared/services/number.service";

@Component({
  selector: 'app-map-statistics',
  templateUrl: './map-statistics.component.html',
  styleUrls: ['./map-statistics.component.scss'],
})
export class MapStatisticsComponent implements OnInit {

  public statistics: StatisticsModel = new StatisticsModel();
  public mapLoading: boolean = false;

  constructor(private store:Store<State>, public number : NumberService) {
    this.store.select(selectMapLoading).subscribe(loading => {
      this.mapLoading = loading;
    });
    this.store.select(selectMapStatistics).subscribe(statistics => {
      this.statistics = statistics;
    });
  }

  ngOnInit(): void {}

}
