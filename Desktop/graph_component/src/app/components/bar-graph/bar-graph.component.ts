import { Component, OnInit, Input } from '@angular/core';

export interface BarGraphData {
  data: number[];
  xaxis: string;
  yaxis: string;
}

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss'],
})
export class BarGraphComponent implements OnInit {

  @Input() data: BarGraphData;

  constructor() { }

  ngOnInit() {

  }

}
