import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

export interface BarGraphData {
  data: number[];
  xaxis: string[];
  yaxis: string;
  graphLabel: string;
  backgroundColor: string[];
}

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss'],
})
export class BarGraphComponent implements OnInit {

  element: any = document.getElementById('myChart');
  ctx;
  myChart;


  @Input() barGraphData: BarGraphData;

  constructor(
    private chartJS: Chart
  ) { }

  ngOnInit() {
    this.ctx = this.element.getContext('2d');
    this.createChart();
  }

  createChart() {
    this.myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: this.barGraphData.xaxis,
        datasets: [{
          label: this.barGraphData.graphLabel,
          data: this.barGraphData.data,
          backgroundColor: this.barGraphData.backgroundColor,
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }




}
