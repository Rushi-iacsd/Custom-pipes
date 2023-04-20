import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import { FormsModule } from '@angular/forms';
import { FilesizePipe } from './shared/pipes/filesize.pipe';
import { FilterPalyersPipe } from './filter-palyers.pipe';
import { FilterPlayersPipe } from './shared/pipes/filter-players.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    FilesizePipe,
    FilterPalyersPipe,
    FilterPlayersPipe,
    
  ],
  imports: [
    BrowserModule,
   FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
