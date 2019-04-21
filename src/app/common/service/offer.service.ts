import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESOURCE } from '../../resource';

@Injectable({
  providedIn: 'root'
})

export class OfferService {
  private API = RESOURCE.ASSETS.BACKEND;

  constructor(private http: HttpClient) {}

  public getHomeOffer(): Observable<any> {
    return this.http.get(this.API.OFFER.HOME_OFFER);
  }
}
