
import { Component, OnInit, Input } from '@angular/core';
import {GraficoModel} from "../models/graficco.model";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

 @Input() List: Array<GraficoModel>;

  public Total=0;
  public MaxHeight= 160;

  constructor() { }

  ngOnInit(): void {
    this.MontarGrafico();
  }

  MontarGrafico(){
    this.List.forEach(element => {
      this.Total += element.Value;
    });

    this.List.forEach(element => {
      element.Size = Math.round((element.Value*this.MaxHeight)/this.Total) + '%';
    });
  }

}