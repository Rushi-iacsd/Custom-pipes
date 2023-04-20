import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from './shared/models/data';

@Pipe({
  name: 'filterPlayers'
})
export class FilterPalyersPipe implements PipeTransform {

  transform(value: Iplayers[], searchText : string): Iplayers[] {
    
    console.log(searchText)
    return value 
  }

}
