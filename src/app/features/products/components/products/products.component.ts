import { Component, OnInit } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { ProductService } from '../../service/product.service';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [TableModule, TagModule, ButtonModule,IconFieldModule, InputIconModule, HttpClientModule, 
    CommonModule, MultiSelectModule, InputTextModule, DropdownModule, SliderModule, ProgressBarModule,
    BreadcrumbComponent,FileUploadModule,ToolbarModule,ToastModule,ConfirmDialogModule,FormsModule,
    InputNumberModule,DialogModule,RatingModule,RadioButtonModule
  ],
  templateUrl: './products.component.html',
  styles: [
    `
    :host ::ng-deep {
        .p-paginator {
            .p-paginator-current {
                margin-left: auto;
            }
        }
        
        .p-progressbar {
            height: .5rem;
            background-color: #D8DADC;
        
            .p-progressbar-value {
                background-color: #607D8B;
            }
        }
        
        .table-header {
            display: flex;
            justify-content: space-between;
        }
        
        .p-calendar .p-datepicker {
            min-width: 25rem;
        
            td {
                font-weight: 400;
            }
        }
        
        .p-datatable.p-datatable-customers {
            .p-datatable-header {
                padding: 1rem;
                text-align: left;
                font-size: 1.5rem;
            }
        
            .p-paginator {
                padding: 1rem;
            }
        
            .p-datatable-thead > tr > th {
                text-align: left;
            }
        
            .p-datatable-tbody > tr > td {
                cursor: auto;
            }
        
            .p-dropdown-label:not(.p-placeholder) {
                text-transform: uppercase;
            }
        }
    
        .p-w-100 {
            width: 100%;
        }
        
        /* Responsive */
        .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {
            display: none;
        }
    }
    
    @media screen and (max-width: 960px) {
        :host ::ng-deep {
            .p-datatable {
                &.p-datatable-customers {
                    .p-datatable-thead > tr > th,
                    .p-datatable-tfoot > tr > td {
                        display: none !important;
                    }
        
                    .p-datatable-tbody > tr {
                        border-bottom: 1px solid var(--layer-2);
        
                        > td {
                            text-align: left;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            border: 0 none;
        
                            .p-column-title {
                                min-width: 30%;
                                display: inline-block;
                                font-weight: bold;
                            }
            
                            p-progressbar {
                                width: 100%;
                            }
    
                            &:last-child {
                                border-bottom: 1px solid var(--surface-d);
                            }
                        }
                    }
                }
            }
        } 
    }   
    `
    ],
  providers: [ProductService, MessageService, ConfirmationService]
})
export class ProductsComponent implements OnInit {
  productDialog: boolean = false;

  products!: Product[];

  product!: Product;

  selectedProducts!: Product[] | null;

  submitted: boolean = false;

  statuses!: any[];
 
  constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data));

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];
  }

  clear(table: Table) {
    table.clear();
  }
  openNew() {
    //this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }
  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  deleteSelectedProducts() {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected products?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
              this.selectedProducts = null;
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
          }
      });
  }
  deleteProduct(product: Product) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + product.name + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.products = this.products.filter((val) => val.id !== product.id);
            //this.product = {};
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
        }
    });
  }
  saveProduct() {
    this.submitted = true;

    if (this.product.name?.trim()) {
        if (this.product.id) {
            this.products[this.findIndexById(this.product.id)] = this.product;
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
        } else {
            this.product.id = this.createId();
            this.product.image = 'product-placeholder.svg';
            this.products.push(this.product);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
        }

        this.products = [...this.products];
        this.productDialog = false;
        //this.product = {};
    }
  }

  findIndexById(id: string): number {
      let index = -1;
      for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }

  createId(): string {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (var i = 0; i < 5; i++) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }
  getSeverity(status: string) {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
        default: return 'info';
    }
  }
}
