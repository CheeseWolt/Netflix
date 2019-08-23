import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FilmComponent } from './film/film.component';
import { SerieComponent } from './serie/serie.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { ListSerieComponent } from './list-serie/list-serie.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { DetailSerieComponent } from './detail-serie/detail-serie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FilmComponent,
    SerieComponent,
    ListFilmComponent,
    ListSerieComponent,
    DetailFilmComponent,
    DetailSerieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
