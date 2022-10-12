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
  showImage: boolean = false;
  filteredProducts: any;
  imageWidth = 50;
  imageMargin = 2;
  errorMessage: string = 'ee';

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(val: string) {
    this._listFilter = val;
    console.log('In settter', val)
  }

  constructor() { }

  ngOnInit(): void {
    this.listFilter = 'carrito'
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
