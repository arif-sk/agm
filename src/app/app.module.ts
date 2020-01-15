import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCXWw0GKVE53HSOQMSTvNI6grHlk1yBTZg',
      libraries: ['places', 'geometry']

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
