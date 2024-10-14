import { Component } from '@angular/core';
import { MeterGroupModule } from 'primeng/metergroup';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { GraphesComponent } from '../graphes/graphes.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MeterGroupModule, CardModule, ButtonModule, CommonModule, GraphesComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  value = [
    { label: 'Products', color1: '#34d399', color2: '#fbbf24', value: 25, icon: 'pi pi-table' },
    { label: 'Orders', color1: '#fbbf24', color2: '#60a5fa', value: 15, icon: 'pi pi-inbox' },
    { label: 'Users', color1: '#60a5fa', color2: '#c084fc', value: 20, icon: 'pi pi-image' },
    { label: 'Category', color1: '#c084fc', color2: '#c084fc', value: 10, icon: 'pi pi-cog' }
];
}
