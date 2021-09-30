import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/component/products/product.model';
import { topping } from '../../../toppings/topping.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  products: Product[] = [
    new Product(
      'pizza',
      'pepperoni',
      12.99,
      '../../../../assets/images/pizza.jpg',
      'Photo by <a href="https://unsplash.com/@karthikgarikapati?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Karthik Garikapati</a> on <a href="https://unsplash.com/license?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    ),
    new Product(
      'pasta',
      'penne noodles and season beef',
      15.99,
      '../../../../assets/images/ben-lei-flFd8L7_B3g-unsplash.jpg',
      'Photo by <a href="https://unsplash.com/@bleiplays33?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ben Lei</a> on <a href="https://unsplash.com/s/photos/pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    )
  ];
  toppings: topping[] = [
    new topping(
      'pepperonis',
      'pepperonis',
      1,
      2.00,
      '../../../../assets/images/pepperonis.jpg',
      'Photo by <a href="https://unsplash.com/@payam__tahery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Payam Tahery</a> on <a href="https://unsplash.com/s/photos/pepperoni?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    ),
    new topping(
      'mushrooms',
      'mushrooms',
      1,
      1.5,
      '../../../../assets/images/mushrooms.jpg',
      'Photo by <a href="https://unsplash.com/@anaviegas91?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ana Viegas</a> on <a href="https://unsplash.com/s/photos/sliced-mushrooms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
