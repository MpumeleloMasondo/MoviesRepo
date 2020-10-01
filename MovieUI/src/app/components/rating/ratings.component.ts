import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { RatingService } from 'src/app/services/rating.service';
import { MoviesRating } from 'src/app/models/moviesrating.model';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  movies : MoviesRating[];
  
  constructor(private ms:RatingService) { }

  ngOnInit(): void {
  
    this.ms
    .getMoviesCountByRating()
    .subscribe((data: MoviesRating[]) => {
      this.movies = data;
    });
  }

  onChangeEvent(event: any){
    this.movies = [];
    console.log(event.target.value);
  }
}
