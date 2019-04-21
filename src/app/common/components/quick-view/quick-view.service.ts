import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductsItemShortModel } from '../../models/product-item-short.model';

@Injectable({
  providedIn: 'root',
})

export class QuickViewService {
  private quickViewProduct: Subject<ProductsItemShortModel> = new Subject<ProductsItemShortModel>();

  constructor() {}

  public setQuickViewProduct(product: ProductsItemShortModel): void {
    this.quickViewProduct.next(product);
  }
  public getQuickViewProduct(): Observable<ProductsItemShortModel> {
    return this.quickViewProduct;
  }
}
