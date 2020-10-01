import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies : Movie[];
  
  constructor(private ms:MovieService) { }

  ngOnInit(): void {
    
    this.ms.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
      console.log(data)
      console.log(this.movies)
    });
  }

  onChangeEvent(event: any){
    this.movies = [];
    console.log(event.target.value);
    
  }

  onDelete(id){
    if(confirm("Are you sure you want to delete ")) {
      this.ms.deleteMovie(id)
      .subscribe(res => {
     
      });
    }
  }

}
