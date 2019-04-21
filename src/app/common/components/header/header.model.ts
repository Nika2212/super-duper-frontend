export class HeaderCurrencyModel {
  constructor(
    public currencyName: string,
    public currencySymbol: string
  ) {}
}
export class HeaderLanguageModel {
  constructor(
    public languageName: string,
    public languageDomain: string
  ) {}
}
export class HeaderCategoryModel {
  constructor(
    public categoryId: string,
    public categoryName: string
  ) {}
}
