export interface StatisticsInterface {
  pins: number;
  renderingTime: string;
  allPins: number;
}

export class StatisticsModel implements StatisticsInterface{
  pins: number = 0;
  renderingTime: string = '0';
  allPins: number = 0;
  constructor(config?: StatisticsInterface) {
    if(config){
      Object.assign(this, config);
    }
  }
}
