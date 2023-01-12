import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFilmComponent } from './list-film/list-film.component';
import { ListSerieComponent } from './list-serie/list-serie.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { DetailSerieComponent } from './detail-serie/detail-serie.component';


const routes: Routes = [
  {path:"", redirectTo:"films", pathMatch:"full"},
  {path:"films", component:ListFilmComponent},
  {path: "series" , component:ListSerieComponent},
  {path:"films/:id", component:DetailFilmComponent},
  {path:"series/:id",component:DetailSerieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
