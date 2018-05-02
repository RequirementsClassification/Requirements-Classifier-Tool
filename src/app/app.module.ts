import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GatherDataComponent } from './gather-data/gather-data.component';

import { ClassifierService } from './services/classifier.service';


@NgModule({
  declarations: [
    AppComponent,
    GatherDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ClassifierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
