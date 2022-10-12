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
  listFilter = 'carrito';
  products: Array<IProduct> = myData;
  showImage: boolean = false;
  filteredProducts: any;
  imageWidth = 50;
  imageMargin = 2;
  errorMessage: string = 'ee';

  constructor() { }

  ngOnInit(): void {
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
