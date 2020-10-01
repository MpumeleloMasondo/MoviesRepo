import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MoviesRating } from '../models/moviesrating.model';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
 
  moviesUrl = 'https://localhost:44357/api';

  constructor(private http: HttpClient) { }

   getMoviesCountByRating() :  Observable<MoviesRating[]>{
    //this.MovieList;

    return this.http.get<MoviesRating[]>(this.moviesUrl + '/rating/GetMoviesCountPerRating')
      .pipe(
        tap(_ => console.log('fetched stats')),
        catchError(this.handleError<MoviesRating[]>('rating eror', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
} 