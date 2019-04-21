import { Component, OnInit } from '@angular/core';
import { QuickViewService } from './common/components/quick-view/quick-view.service';
import {ProductsItemShortModel} from './common/models/product-item-short.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public preSelectedProductItem: ProductsItemShortModel = null;

  constructor(private quickViewService: QuickViewService) {}

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
  }
}
