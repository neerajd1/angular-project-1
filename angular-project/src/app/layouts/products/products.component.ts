import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  title = 'Products';
  mobParts = [
    {
      prodId: 1001,
      prodName: 'Apple',
      prodInStock: 55,
      prodPrice: 80000,
      country: 'Australia',
    },
    {
      prodId: 1002,
      prodName: 'Samsung',
      prodInStock: 105,
      prodPrice: 40000,
      country: 'India',
    },
    {
      prodId: 1003,
      prodName: 'Apple',
      prodInStock: 0,
      prodPrice: 80000,
      country: '',
    },
  ];

  ngOnInit(): void {}
}
