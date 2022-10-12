import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle = `Product List`;
  listFilter: any = 'eas';
  products: Array<any> = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "../../assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "../../assets/images/garden_cart.png"
    }
  ];
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
