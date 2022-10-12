import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import myData from '../../../api/products/products.json';
@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle = `Product List`;
  products: Array<IProduct> = myData;
  filteredProducts: Array<IProduct> = [];
  showImage: boolean = false;
  imageWidth = 50;
  imageMargin = 2;
  errorMessage: string = 'ee';

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(val: string) {
    this._listFilter = val;
    this.filteredProducts = this.performFilter(val);
  }

  constructor() { }

  ngOnInit(): void {
    this.listFilter = '';
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => product.productName.includes(filterBy));
  }

}
