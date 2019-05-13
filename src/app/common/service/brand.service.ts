import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESOURCE } from '../../resource';

@Injectable({
  providedIn: 'root'
})

export class BrandService {
  private API = RESOURCE.ASSETS.BACKEND;

  constructor(private http: HttpClient) {}

  public getTopBrands(): Observable<any> {
    return this.http.get(this.API.BRAND.TOP_BRANDS);
  }
}
