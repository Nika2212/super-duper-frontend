import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CartPreviewService {
  private cartVisibilityState: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  public setCartVisibilityState(state: boolean): void {
    this.cartVisibilityState.next(state);
  }
  public getCartVisibilityState(): Observable<boolean> {
    return this.cartVisibilityState;
  }
}
