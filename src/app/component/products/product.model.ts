export class Product{
  public name: string;
  public description: string;
  public price: number;
  public imagePath: string;
  public imageDescription: string;

  constructor(name: string, description: string, price: number, imagePath: string, imageDescription: string)
  {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imagePath = imagePath;
    this.imageDescription = imageDescription;
  }
}
