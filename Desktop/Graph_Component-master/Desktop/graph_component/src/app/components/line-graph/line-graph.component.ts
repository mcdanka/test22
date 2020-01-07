import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js'

export interface LineGraphData {
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
export class LineGraphComponent implements OnInit {

  @Input() lineGraphData: LineGraphData;

  ctx;
  lineGraph;

  constructor(
    private chartJS: Chart
  ) { }

  ngOnInit() {
    const element2 = document.getElementById('newChart') as HTMLCanvasElement;
    this.ctx = element2.getContext('2d');
    this.lineGraph = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['A', 'B', 'C', 'D', 'E', 'F'],
        datasets: [{
          label: 'Pain Level',
          data: [9, 7, 7, 5, 6, 7, 4],
          pointBackgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          pointBorderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 4,
          fill: false,
          borderColor: 'rgba(200,200,200,.5)',
        }],
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
