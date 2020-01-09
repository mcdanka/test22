import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js'

export interface LineGraphData {
  data: number[];
  xaxis: string;
  yaxis: string;
  graphTitle: string;
  graphLabel: string[];
  borderColor: string;
  borderWidth: number;
  pointBorderColor: string[],
  fill: boolean;
  pointColor: string[];
}

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss'],
})
export class LineGraphComponent implements OnInit {

  @Input() lineGraphData: LineGraphData;

  ctx;
  lineGraph;

  constructor(
    private chartJS: Chart
  ) { }

  ngOnInit() {
    const element2 = document.getElementById('lineGraph') as HTMLCanvasElement;
    this.ctx = element2.getContext('2d');
    this.lineGraph = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: this.lineGraphData.xaxis,
        datasets: [{
          label: this.lineGraphData.graphLabel,
          data: this.lineGraphData.data,
          borderColor: this.lineGraphData.borderColor,
          borderWidth: this.lineGraphData.borderWidth,
          pointBackgroundColor: this.lineGraphData.pointColor
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Pain Levels by Visit',
          fontSize: 30
        },
        scales: {
          display: true,
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
            top: 100,
            bottom: 0
          }
        }
      }
    });
  }
}   
