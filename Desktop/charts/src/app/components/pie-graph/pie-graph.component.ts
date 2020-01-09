import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js'

export interface PieGraphData {
  data: number[];
  xaxis: string;
  yaxis: string;
  graphTitle: string;
  graphLabel: string[];
  backgroundColor: string[];
  borderColor: string;
  borderWidth: number;
}

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss'],
})
export class PieGraphComponent implements OnInit {

  @Input() pieGraphData: PieGraphData;

  ctx;
  pieChart;

  constructor(
    private chartJS: Chart
  ) { }

  ngOnInit() {
    const element = document.getElementById('pieChart') as HTMLCanvasElement;
    this.ctx = element.getContext('2d');
    this.pieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: this.pieGraphData.xaxis,
        datasets: [{
          label: this.pieGraphData.graphLabel,
          data: this.pieGraphData.data,
          borderColor: this.pieGraphData.borderColor,
          borderWidth: this.pieGraphData.borderWidth,
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

