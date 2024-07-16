import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FLUIDLibraryModule } from 'my-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FLUIDLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
