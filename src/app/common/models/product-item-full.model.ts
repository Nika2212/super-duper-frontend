export class ProductItemFullModel {
  constructor(
    public id: string,
    public category: string,
    public gender: string,
    public name: string,
    public desc: string,
    public brand: string,
    public price: number,
    public oldPrice: number,
    public badge: string,
    public sku: string,
    public thumbnail: string,
    public color: {
      colorName: string,
      colorHEX: string,
      color: {
        url: string
      }[],
    }[],
    public available: boolean,
    public size: number[]
  ) {}
}
