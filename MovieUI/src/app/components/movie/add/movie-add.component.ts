import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../../../services/movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  fmGroup: FormGroup;
  
  constructor(private fb: FormBuilder, private ms: MovieService, private router: Router ) {
    this.createForm();
  }

  createForm() {
    this.fmGroup = this.fb.group({
      MovieName: ['', Validators.required],
      Category: ['', Validators.required],
      Rating: ['', Validators.compose([ Validators.required, Validators.max(5), Validators.min(1)])]
    });
  }
 
  addMovie(MovieName, Category, Rating) {
    this.ms.addMovie(MovieName, Category, Rating);
    this.router.navigate(['movies']);
  }

  cancel() {
    this.router.navigate(['movies']);
  }

  ngOnInit(): void {
  }

  
}
