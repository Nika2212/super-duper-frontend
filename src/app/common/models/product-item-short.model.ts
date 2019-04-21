export class ProductsItemShortModel {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public oldPrice: number,
    public colorId: string,
    public sizeId: string,
    public newBadge: boolean,
    public hotBadge: boolean,
    public image: string
  ) {}
}
