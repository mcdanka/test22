import { Injectable } from '@angular/core';
import { BarGraphData } from 'src/app/components/bar-graph/bar-graph.component';

@Injectable({
  providedIn: 'root'
})
export class GraphDataService {

  constructor() { }

  async getBarGraphData() {
    const data: BarGraphData = {
      data: [8, 9, 10],
      xaxis: 'date',
      yaxis: 'value',
      graphTitle: '# of Votes', 
      graphLabel: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
    }
    return data;
  }
}
  
