import { MobParts } from './../../model/mob-parts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css'],
})
export class MobilesComponent implements OnInit {
  constructor() {}

  mobParts: MobParts[] = [
    {
      prodId: 1001,
      prodName: 'Apple',
      prodInStock: 55,
      prodPrice: 80000,
      country: 'Australia',
      sold: false,
    },
    {
      prodId: 1002,
      prodName: 'Samsung',
      prodInStock: 105,
      prodPrice: 40000,
      country: 'India',
      sold: false,
    },
    {
      prodId: 1003,
      prodName: 'Apple',
      prodInStock: 0,
      prodPrice: 80000,
      country: '',
      sold: true,
    },
  ];
  calcProducts() {
    let sum = 0;
    for (let mobPart of this.mobParts) {
      sum += mobPart.prodInStock;
    }

    return sum;
  }

  ngOnInit(): void {}
}
