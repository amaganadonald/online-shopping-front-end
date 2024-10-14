import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { GalleriaModule } from 'primeng/galleria';


@Component({
    selector: 'app-carousel',
    standalone: true,
    imports: [GalleriaModule],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.scss',
    providers: [ProductService]
})
export class CarouselComponent implements OnInit {
    imagesProducts: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getImages().then((images) => (this.imagesProducts = images));
    }

}
