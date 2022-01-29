import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ];

  public radarChartData: ChartDataSets[] = [
    { data: [60, 70, 85, 85, 56, 50, 55], 
      label: 'Spring', 
      backgroundColor: 'rgba(255, 1, 1, 0.5)',
      borderColor: 'rgba(255, 1, 1, 0.5)' 
    },
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Summer' },
    { data: [40, 50, 50, 45, 80, 20, 70], label: 'Fall' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Winter' },
  ];
  public radarChartType: ChartType = 'radar';

  constructor() {}

  ngOnInit() {}
}