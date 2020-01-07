import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js'

export interface BarGraphData {
  data: number[];
  xaxis: string;
  yaxis: string;
  graphTitle: string;
  graphLabel: string[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss'],
})
export class BarGraphComponent implements OnInit {

  @Input() BarGraphData: BarGraphData;

  ctx;
  myChart;

  constructor(
    private chartJS: Chart
  ) { }

  ngOnInit() {
    const element = document.getElementById('myChart') as HTMLCanvasElement;
    this.ctx = element.getContext('2d');
    this.myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: this.BarGraphData.xaxis,
        datasets: [{
          label: this.BarGraphData.graphLabel,
          data: this.BarGraphData.data,
          backgroundColor: this.BarGraphData.backgroundColor,
          borderColor: this.BarGraphData.borderColor,
          borderWidth: this.BarGraphData.borderWidth
        }]
      },
      options: {
        title: {
          display: true,
          text: this.BarGraphData.graphTitle,
          fontSize: 24
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 150,
            bottom: 0
          }
        }
      }
    });

  }
}