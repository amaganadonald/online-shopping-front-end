import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter'; 
import { PiechartsComponent } from '../piecharts/piecharts.component';
import { BarchartsComponent } from '../barcharts/barcharts.component';
import { LinechartsComponent } from '../linecharts/linecharts.component';
import { StackedchartsComponent } from '../stackedcharts/stackedcharts.component';

@Component({
  selector: 'app-graphes',
  standalone: true,
  imports: [SplitterModule, PiechartsComponent, BarchartsComponent,
    LinechartsComponent,StackedchartsComponent],
  templateUrl: './graphes.component.html',
  styleUrl: './graphes.component.scss'
})
export class GraphesComponent {

}
