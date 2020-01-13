import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {

  id;
  film;

  constructor(private filmService: FilmService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params.id);

  }

  ngOnInit() {
    this.film = this.filmService.getFilmById(this.id)
    .subscribe(data=>{this.film =  data;
      console.log(data);
      console.log(this.id);
    });
  }

}
