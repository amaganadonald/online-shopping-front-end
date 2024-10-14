import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [SplitterModule,BreadcrumbComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

}
