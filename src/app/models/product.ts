import { Size } from "./size";
import { Topping } from "./topping";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  size: Size[];
  toppings: Topping[];
  imagePath: string;
  imageDescription: string;
}
