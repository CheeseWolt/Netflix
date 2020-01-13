import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFilmComponent } from './list-film/list-film.component';
import { ListSerieComponent } from './list-serie/list-serie.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { DetailSerieComponent } from './detail-serie/detail-serie.component';


const routes: Routes = [
  {path:"", redirectTo:"film", pathMatch:"full"},
  {path:"film", component:ListFilmComponent},
  {path: "serie" , component:ListSerieComponent},
  {path:"detailFilm/:id", component:DetailFilmComponent},
  {path:"detailSerie/:id",component:DetailSerieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
