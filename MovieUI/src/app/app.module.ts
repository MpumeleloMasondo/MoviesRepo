import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { MoviesComponent } from './components/movie/list/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MovieAddComponent } from './components/movie/add/movie-add.component';
import { MovieEditComponent } from './components/movie/edit/movie-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LbdChartComponent } from './lbd/lbd-chart/lbd-chart.component';
import { HomeComponent } from './components/home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RatingsComponent } from './components/rating/ratings.component';
import {ChartModule} from 'primeng/chart';
import {PanelModule} from 'primeng/panel';
import {RatingModule} from 'primeng/rating';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieAddComponent,
    MovieEditComponent,
    HomeComponent,
    LbdChartComponent,
    RatingsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
    AppRoutingModule,
    SidebarModule,
    ChartModule,
    NavbarModule,
    FooterModule,
    RouterModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    
    PanelModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
