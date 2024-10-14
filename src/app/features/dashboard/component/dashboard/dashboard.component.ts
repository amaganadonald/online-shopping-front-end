import { Component } from '@angular/core';
import { LatestProductsComponent } from '../../../products/components/latest-products/latest-products.component';
import { CarouselComponent } from '../../../products/components/carousel/CarouselComponent';
import { CategoryComponent } from '../../../category/components/category/category.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CarouselComponent, LatestProductsComponent, CategoryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
