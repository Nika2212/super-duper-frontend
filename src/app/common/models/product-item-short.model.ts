export class ProductsItemShortModel {
  constructor(
    public id: string = null,
    public category: string = null,
    public gender: string = null,
    public name: string = null,
    public brand: string = null,
    public price: number = null,
    public oldPrice: string = null,
    public badge: string = null,
    public sku: string = null,
    public thumbnail: string = null,
    public available: boolean = null
  ) {}
}
