import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { DashboardService } from 'src/app/services/dashboard.service';
import { MoviesCategory } from 'src/app/models/moviescategory.model';
import { CategoryRating } from 'src/app/models/categoryrating.model';
import { AverageCategoryRating } from 'src/app/models/averagerating.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  barGraphData:any;
  averageRating : any;

  constructor(private dbService: DashboardService) {


  }
  moviesCategory: any;
  labels: any;
  series: [];

  pieColors: any[] = [];

  ngOnInit() {

    this.dbService.getMoviesCountByCategory().subscribe((data: MoviesCategory[]) => {
      this.moviesCategory = data;
      
      for (var i = 0; i < data.length; i++) {
        this.pieColors.push("#" + (Math.random() * 16777215).toString(16).substr(0, 6).split(".")[0]);
      }

      this.labels = this.moviesCategory.map(a => a.category);
      this.series = this.moviesCategory.map(a => a.moviesCount);

      this.getPie(data);

    });
   
    this.dbService.getMoviesByRatingPerCategory().subscribe((data: CategoryRating[]) => {
     console.log(data);

     this.getBarGraph(data);

    });

    this.dbService.getAverageRatingPerCategory().subscribe((data: AverageCategoryRating[]) => {
      console.log(data);
 
      this.averageRating =data;
 
     });


  }

  getPie(data) {
    this.data = {
      labels: data.map(a => a.category),
      datasets: [
        {
          data: data.map(a => a.moviesCount),
          backgroundColor: this.pieColors,
          hoverBackgroundColor: this.pieColors

        }]
    };
  }
  val4 :any = 4;

  getBarGraph(data) {

    this.barGraphData = {
      labels: data.map(a=> a.category),
      datasets: [
          {
              label: 'Average Rating',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: data.map(a => a.averageRating )
          }
      ]
    }

  //   this.barGraphData = {
  //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //     datasets: [
  //         {
  //             label: 'My First dataset',
  //             backgroundColor: '#42A5F5',
  //             borderColor: '#1E88E5',
  //             data: [65, 59, 80, 81, 56, 55, 40]
  //         },
  //         {
  //             label: 'My Second dataset',
  //             backgroundColor: '#9CCC65',
  //             borderColor: '#7CB342',
  //             data: [28, 48, 40, 19, 86, 27, 90]
  //         }
  //     ]
  // };
  }

  getColor(count) {

    var color = 'BBFFF';


    return [];
  }



}
