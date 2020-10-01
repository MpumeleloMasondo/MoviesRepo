import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { DashboardService } from 'src/app/services/dashboard.service';
import { MoviesCategory } from 'src/app/models/moviescategory.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public emailChartType: ChartType;
  public emailChartData: any;
  public emailChartLegendItems: LegendItem[];

  public hoursChartType: ChartType;
  public hoursChartData: any;
  public hoursChartOptions: any;
  public hoursChartResponsive: any[];
  public hoursChartLegendItems: LegendItem[];

  public activityChartType: ChartType;
  public activityChartData: any;
  public activityChartOptions: any;
  public activityChartResponsive: any[];
  public activityChartLegendItems: LegendItem[];
  constructor(private dbService: DashboardService) { }
  moviesCategory: any;
  labels: [];
  series: [];

  ngAfterViewInit() {
    this.emailChartType = ChartType.Pie;
    this.emailChartData = {
      labels: ["hi%"],
      series: [62]
    };
    this.emailChartLegendItems = [
      { title: 'Open', imageClass: 'fa fa-circle text-info' },
      { title: 'Bounce', imageClass: 'fa fa-circle text-danger' },
      { title: 'Unsubscribe', imageClass: 'fa fa-circle text-warning' }
    ];
  }

  ngOnInit() {

    this.dbService.getMoviesCountByCategory().subscribe((data: MoviesCategory[]) => {
      this.moviesCategory = data;
            
      this.labels = this.moviesCategory.map(a => a.category);
      this.series = this.moviesCategory.map(a => a.moviesCount);
      this.emailChartType = ChartType.Pie;
      this.emailChartData = {
        labels: this.labels,
        series: this.series
      };
      this.emailChartLegendItems = [
        { title: "Category", imageClass: "fa fa-circle text-info" }
      ];
      // this.emailChartType = ChartType.Pie;
      // this.emailChartData = {
      //   labels: ['categoryname'],
      //   series: [5]
      // };

    });
  }

}
