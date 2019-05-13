import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RESOURCE } from '../../resource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private API = RESOURCE.ASSETS.BACKEND;

  constructor(private http: HttpClient) {}

  public getNewProducts(): Observable<any> {
    return this.http.get(this.API.PRODUCT.NEW_PRODUCTS);
  }
  public getBestsellerProducts(): Observable<any> {
    return this.http.get(this.API.PRODUCT.BESTSELLER_PRODUCTS);
  }
  public getFeaturedProducts(): Observable<any> {
    return this.http.get(this.API.PRODUCT.FEATURED_PRODUCTS);
  }
  public getProductOption(id: string): Observable<any> {
    return this.http.get(this.API.PRODUCT.PRODUCT_OPTION);
  }
}
