import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumb: MenuItem[] | undefined;
  home: MenuItem | undefined;
  ngOnInit(): void {
    this.breadcrumb = [
      { label: 'Electronics' }, 
      { label: 'Computer' }, 
      { label: 'Accessories' }, 
      { label: 'Keyboard' }, 
      { label: 'Wireless' }
    ];
    
  }
}
