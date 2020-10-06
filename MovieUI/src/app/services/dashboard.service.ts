import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MoviesCategory } from '../models/moviescategory.model';
import { CategoryRating } from '../models/categoryrating.model';
import { AverageCategoryRating } from '../models/averagerating.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 
  moviesUrl = 'https://localhost:44357/api';

  constructor(private http: HttpClient) { }

   getMoviesCountByCategory() :  Observable<MoviesCategory[]>{

    return this.http.get<MoviesCategory[]>(this.moviesUrl + '/stats/GetMoviesCountPerCategory')
      .pipe(
        tap(),
        catchError(this.handleError<MoviesCategory[]>('dashboard', []))
      );
  }

  getMoviesByRatingPerCategory() :  Observable<CategoryRating[]>{

    return this.http.get<CategoryRating[]>(this.moviesUrl + '/stats/GetMoviesByRatingPerCategory')
      .pipe(
        tap(),
        catchError(this.handleError<CategoryRating[]>('dashboard', []))
      );
  }

  getAverageRatingPerCategory() :  Observable<AverageCategoryRating[]>{

    return this.http.get<AverageCategoryRating[]>(this.moviesUrl + '/stats/GetAverageByRatingPerCategory')
      .pipe(
        tap(),
        catchError(this.handleError<AverageCategoryRating[]>('dashboard', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);

    }; 
  }
} 