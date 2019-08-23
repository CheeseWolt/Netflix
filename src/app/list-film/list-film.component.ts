import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {

  constructor(private filmService : FilmService) { }

  films;
  
  ngOnInit() {
    this.films = this.filmService.getFilms().subscribe(data=>this.films = data['results']);
  }

}
