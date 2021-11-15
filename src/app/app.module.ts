import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CustomPipePipe } from '../services/custom-pipe.pipe';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    CustomPipePipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
