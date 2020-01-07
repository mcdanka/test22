import { Component, OnInit } from '@angular/core';
import { BarGraphData } from '../components/bar-graph/bar-graph.component';
import { GraphDataService } from '../services/graph-data/graph-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  barGraphData = {} as BarGraphData;

  constructor(
    private graphService: GraphDataService
  ) {}

  ngOnInit() {
    this.getBarGraphData();
    console.log(this);
  }

  async getBarGraphData() {
    this.barGraphData = await this.graphService.getBarGraphData();
    // 
    //
    //
    //

  }

}
