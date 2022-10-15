import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import myData from '../../../api/products/products.json';
import { ProductServiceService } from '../../shared/services/product-service.service';
@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  pageTitle = `Product List`;
  products: Array<IProduct> = [];
  filteredProducts: Array<IProduct> = [];
  showImage: boolean = false;
  imageWidth = 50;
  imageMargin = 2;
  errorMessage: string = '';

  sub!: Subscription | undefined;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(val: string) {
    this._listFilter = val;
    this.filteredProducts = this.performFilter(val);
  }

  constructor(private productService: ProductServiceService) { 
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
    this.listFilter = '';
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => product.productName.includes(filterBy));
  }

  ngOnDestroy(): void {
      this.sub?.unsubscribe();
  }

}
