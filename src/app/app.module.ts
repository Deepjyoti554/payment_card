import { NgModule } from '@angular/core';
// import {formsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // formsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
