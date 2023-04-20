import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from '../models/data';

@Pipe({
  name: 'filterPlayers'
})
export class FilterPlayersPipe implements PipeTransform {

  transform(value: Iplayers[], searchText : string): Iplayers[] {
    
    
    if(!value){
      return []
    }
  

    if(!searchText){
      return value
    }


    let filterdArray = value.filter(playObj => {
      return playObj.country.toLowerCase().startsWith(searchText.toLowerCase())
    })

    
    return filterdArray
  }
}
