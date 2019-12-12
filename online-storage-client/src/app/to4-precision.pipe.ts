import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'to4Precision'
})
export class To4PrecisionPipe implements PipeTransform {

  transform(value: number): number{
    return Number(value.toPrecision(2));
  }

}
