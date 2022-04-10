import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

// Components
import { WidgetWrapperComponent } from './components/widget-wrapper/widget-wrapper.component';
import { RonSwansonComponent } from './components/ron-swanson/ron-swanson.component';
import { FriendsComponent } from './components/friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetWrapperComponent,
    RonSwansonComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
