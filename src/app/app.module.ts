import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { WidgetWrapperComponent } from './components/widget-wrapper/widget-wrapper.component';
import { RonSwansonComponent } from './components/ron-swanson/ron-swanson.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetWrapperComponent,
    RonSwansonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
