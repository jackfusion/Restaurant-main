import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product | undefined;
  imagePath: string = "";

  constructor() { }

  ngOnInit(): void {
    this.imagePath = this.product?.imagePath ?? '';
  }

}
