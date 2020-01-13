import { Component, OnInit } from '@angular/core';
import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-list-serie',
  templateUrl: './list-serie.component.html',
  styleUrls: ['./list-serie.component.css']
})
export class ListSerieComponent implements OnInit {

  constructor(private serieService : SerieService) { }

  series;

  ngOnInit() {
    this.series = this.serieService.getSeries().subscribe(data => this.series = data["results"])
  }

}
