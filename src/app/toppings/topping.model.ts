export class topping{
  public name: string;
  public description: string;
  public quantity: number;
  public price: number;
  public image: string;
  public imageDescription: string;

  constructor(name: string, description: string, quantity: number, price: number, image: string, imageDescription: string) {
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
    this.image = image;
    this.imageDescription = imageDescription;
}
}
