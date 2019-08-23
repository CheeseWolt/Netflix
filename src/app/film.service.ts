import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map , catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http : HttpClient) { }

  getFilms():Observable<any[]>{
    return this.http.get<any[]>("https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&language=fr-FR&api_key=87dfa1c669eea853da609d4968d294be")
    .pipe(
      tap(data=>
        console.log(data))
    )
  }

  getFilmById(id:number):Observable<any[]>{
    return this.http.get<any[]>("https://api.themoviedb.org/3/movie/"+id+"?api_key=87dfa1c669eea853da609d4968d294be&language=fr-FR")
  }
}
