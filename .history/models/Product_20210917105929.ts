export class Product {
  public id: number;
  public name: string;
  public colour: string;
  public price: number;
  public img: string;
}

export class ShoppingCart {
  public product: Product;
  public Quantity: number;
}

