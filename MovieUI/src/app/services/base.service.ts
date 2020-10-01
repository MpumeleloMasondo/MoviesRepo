import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';  
import { catchError, map, tap } from 'rxjs/operators';
 import {Movie} from '../models/movie.model'
import { Observable, of } from 'rxjs';
  
@Injectable({  
  providedIn: 'root'  
})  
export class BaseService {  
  MovieList: Array<Movie> = ([  
    { MovieId: '1', MovieName: 'Mobile', Category:'',Rating: 5 } 
  
  ])

  private MoviesUrl = 'http://localhost:60039/umbraco/api/Movies';

  constructor( private http: HttpClient) { } 

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.MoviesUrl + '/GetTestContentItems')
      .pipe(
        tap(_ => console.log('fetched Movies')),
        catchError(this.handleError<Movie[]>('GetTestContentItems', []))
      );
  }

  get() {  
    return this.MovieList;  
  }  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
} 