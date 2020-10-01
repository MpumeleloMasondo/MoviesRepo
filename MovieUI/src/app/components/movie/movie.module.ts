import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './list/movies.component';
import { MovieAddComponent } from './add/movie-add.component';
import { MovieEditComponent } from './edit/movie-edit.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ MoviesComponent, MovieAddComponent,MovieEditComponent  ],
    exports: [ MoviesComponent, MovieAddComponent,MovieEditComponent ]
})

export class MoviesModule {}
