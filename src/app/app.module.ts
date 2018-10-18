import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpIEHelperModule, HttpIEHelperInterceptor } from '../../projects/ie-helper/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpIEHelperModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
