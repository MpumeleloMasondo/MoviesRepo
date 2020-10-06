import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  fmGroup: FormGroup;
  movie: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ms: MovieService, private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
       this.ms.editMovie(params[`id`])
      .subscribe(res => {
      this.movie = res;
        console.log("on edit id:" + params[`id`]);
        console.log(res);
      });
    });
  }

  updateMovie(MovieName, Category, Rating) {
    this.route.params.subscribe(params => {
      this.ms.updateMovie(MovieName, Category, Rating, params.id);
      this.router.navigate(['movies']);
    });
  }

  cancel() {
    this.router.navigate(['movies']);
  }

  createForm() {
    this.fmGroup = this.fb.group({
      movieName: ['', Validators.required],
      category: ['', Validators.required],
      rating: ['', Validators.compose([ Validators.required, Validators.max(5), Validators.min(1)])]

    });
  }
}
