import { Injectable } from '@angular/core';
import {SharedModule} from "../shared.module";

@Injectable({
  providedIn: SharedModule
})
export class NumberService {

  constructor() { }

  long( nr: number | string ): string {
    if (nr) {return this.splitNumbers(nr);}
    return '0';
  }

  short( nr: any | string ): string{
    if(nr){
      let numbers = this.splitNumbers(nr).split(',');
      return this.calcShort(numbers);
    }
    return '0';
  }

  splitNumbers(nr: any): string{
    let numbers = nr.toString().split("").reverse().join("").match(/.{1,3}/g);
    return numbers.reverse().map((item: any) => item.split("").reverse().join("") ).join(',');
  }

  checkSecondPartNumbers( numbers: any ): number {
    let secondPartNumbers = numbers[1].split("");
    if( secondPartNumbers[0] > 0){
      return secondPartNumbers[0];
    }
    return 0;
  }

  calcShort(numbers: string[]): string{
    let  h = 'H' ,k = 'K' , m = 'M' , b = 'B',t = 'T';  // thousand  // Milion // Bilion // Trilion

    let countParts = numbers.length;

    if( countParts == 5 ){ // trilion
      let secondPartNumbers = this.checkSecondPartNumbers(numbers);
      return ( secondPartNumbers ) ? numbers[0] + '.' + secondPartNumbers + t : numbers[0] + t;
    }
    else if(countParts == 4){ // bilion
      let secondPartNumbers = this.checkSecondPartNumbers(numbers);
      return ( secondPartNumbers ) ? numbers[0] + '.' + secondPartNumbers + b : numbers[0] + b;
    }
    else if(countParts == 3){ // milion
      let secondPartNumbers = this.checkSecondPartNumbers(numbers);
      return ( secondPartNumbers ) ? numbers[0] + '.' + secondPartNumbers + m : numbers[0] + m;
    }
    else if (countParts == 2){ // thousend
      let secondPartNumbers = this.checkSecondPartNumbers(numbers);
      return ( secondPartNumbers ) ? numbers[0] + '.' + secondPartNumbers + k : numbers[0] + k;
    }
    else if(countParts == 1) { // houndred
      return numbers[0];
    } else {
      return '0';
    }
  }
}
