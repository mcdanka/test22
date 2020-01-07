import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ctx;
  myChart;
  newChart;

  constructor() { }

  ngOnInit() {
    const element = document.getElementById('myChart') as HTMLCanvasElement;
    this.ctx = element.getContext('2d');
    this.myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
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
        title: {
          display: true,
          text: 'Votes by Color',
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


    const element2 = document.getElementById('newChart') as HTMLCanvasElement;
    this.ctx = element2.getContext('2d');
    this.newChart = new Chart(this.ctx, {
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
