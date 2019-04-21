export class ProductItemOptionModel {
  constructor(
    public id: string,
    public availableColors: ProductItemColorModel[],
    public availableSizes: ProductItemSizeModel[]
  ) {}
}
export class ProductItemColorModel {
  constructor(
    public id: string,
    public color: string,
    public image: string
  ) {}
}
export class ProductItemSizeModel {
  constructor(
    public id: string,
    public name: string,
  ) {}
}
