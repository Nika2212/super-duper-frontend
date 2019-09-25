export class ProductsItemShortModel {
  constructor(
    public id: string,
    public category: string,
    public gender: string,
    public name: string,
    public brand: string,
    public price: number,
    public oldPrice: string,
    public badge: string,
    public sku: string,
    public thumbnail: string,
    public available: boolean
  ) {}
}
