import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from '../models/movie.model'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesUrl = 'https://localhost:44357/api';

  constructor(private http: HttpClient) { }

  addMovie(MovieName, Category, Rating) {
    const obj = {
      MovieName,
      Category,
      Rating
    };
    console.log(obj);
    this.http.post(`${this.moviesUrl}/movie`, obj)
      .subscribe(res => console.log('Done'));
  }

   getMovies() :  Observable<Movie[]>{

    return this.http.get<Movie[]>(this.moviesUrl + '/movie')
      .pipe(
        tap(_ => console.log('fetched Movies')),
        catchError(this.handleError<Movie[]>('movie', []))
      );
  }

  editMovie(id) {

   return this.http.get<Movie>(this.moviesUrl + '/movie/'+ id)
      .pipe(
        tap(_ => console.log('record edited')),
        catchError(this.handleError<Movie>('an error occurred.', ))
      );
  }

  updateMovie(MovieName, Category, Rating, id) {
    const obj = {
      MovieName,
      Category,
      Rating
    };
    this
      .http
      .put(`${this.moviesUrl}/movie/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
 
  deleteMovie(id) {
 
    return this.http.get<Movie>(this.moviesUrl + '/movie/delete'+ id)
       .pipe(
         tap(_ => console.log('Record deleted.')),
         catchError(this.handleError<Movie[]>('Delete', []))
       );
   }
 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
} 