import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {

  constructor(private filmService : FilmService) { }

  films: any[];
  
  ngOnInit() {
    this.filmService.getFilms().subscribe(data=>this.films = data['results']);
  }

}
