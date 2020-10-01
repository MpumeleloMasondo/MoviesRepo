import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movie/list/movies.component';
import { MovieAddComponent } from './components/movie/add/movie-add.component';
import { MovieEditComponent } from './components/movie/edit/movie-edit.component';
import { HomeComponent } from './components/home/home.component';
import { RatingsComponent } from './components/rating/ratings.component';


const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/create', component: MovieAddComponent },
  { path: 'movie/edit/:id', component: MovieEditComponent },
  { path: 'ratings', component: RatingsComponent }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
