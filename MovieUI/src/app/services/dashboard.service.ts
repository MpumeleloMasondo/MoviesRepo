import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MoviesCategory } from '../models/moviescategory.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 
  moviesUrl = 'https://localhost:44357/api';

  constructor(private http: HttpClient) { }

   getMoviesCountByCategory() :  Observable<MoviesCategory[]>{

    return this.http.get<MoviesCategory[]>(this.moviesUrl + '/dashboard/GetMoviesCountPerCategory')
      .pipe(
        tap(_ => console.log('fetched stats')),
        catchError(this.handleError<MoviesCategory[]>('dashboard', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
} 