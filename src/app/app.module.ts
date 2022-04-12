import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';

// Components
import { WidgetWrapperComponent } from './components/widget-wrapper/widget-wrapper.component';
import { RonSwansonComponent } from './components/ron-swanson/ron-swanson.component';
import { DogImageComponent } from './components/dog-image/dog-image.component';

// Libraries
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent,
    WidgetWrapperComponent,
    RonSwansonComponent,
    DogImageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HighlightModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTabsModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
