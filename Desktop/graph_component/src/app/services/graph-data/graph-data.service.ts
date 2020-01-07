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
      yaxis: 'value'

    }
    return data;
  }
}
