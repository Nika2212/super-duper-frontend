import { Component, Inject, OnInit } from '@angular/core';
import { QuickViewService } from './common/components/quick-view/quick-view.service';
import { ProductsItemShortModel } from './common/models/product-item-short.model';
import { DOCUMENT } from "@angular/common";
import { CartPreviewService } from "./common/components/cart-preview/cart-preview.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public preSelectedProductItem: ProductsItemShortModel = null;
  public cartPreviewVisibilityState: boolean = false;
  public cartPreviewVisibilityAdvancedState: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document,
              private quickViewService: QuickViewService,
              private cartPreviewService: CartPreviewService) {}

  public ngOnInit(): void {
    this.quickViewService.getQuickViewProduct().subscribe((product: ProductsItemShortModel) => {
      if (product) {
        document.body.classList.add('object-fullscreen');
        this.preSelectedProductItem = product;
      } else {
        document.body.classList.remove('object-fullscreen');
        this.preSelectedProductItem = null;
      }
    });
    this.cartPreviewService.getCartVisibilityState().subscribe((payload: boolean) => {
      if (payload) {
        this.cartPreviewVisibilityState = true;
        this.cartPreviewVisibilityAdvancedState = true;
        this.document.body.style.overflowY = 'hidden';
      } else {
        this.cartPreviewVisibilityState = false;
        setTimeout(() => {
          this.cartPreviewVisibilityAdvancedState = false;
          this.document.body.style.overflowY = '';
        }, 180);
      }
    });
  }
}
