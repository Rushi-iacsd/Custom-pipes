import { Component } from '@angular/core';

import { Ifiles, Iplayers } from './shared/models/data';
import { cricketers } from './shared/const/players';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, sed deleniti! Nulla corporis iure dolore voluptatem quod repudiandae! Minima quia hic deserunt itaque quis reiciendis animi nesciunt fuga consequatur amet?';

 searchByValue!: string;


  filesArray : Array<Ifiles> = [
    {
      name: "Form 16",
      size : 2659686,
      type: 'pdf'
    },
    {
      name: "salary slip",
      size : 83688,
      type: 'pdf'
    },
    {
      name: "TDC",
      size : 2659645489,
      type: 'pdf'
    },
  ]
 
  
 playersArray : Iplayers[]= cricketers;

}


