import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CustomPipePipe } from '../services/custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
