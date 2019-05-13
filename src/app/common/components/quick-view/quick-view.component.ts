import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { QuickViewService } from './quick-view.service';
import { RESOURCE } from '../../../resource';
import { ProductsItemShortModel } from '../../models/product-item-short.model';
import { ProductItemOptionModel } from '../../models/product-item-option.model';
import { ProductItemSelectedModel } from '../../models/product-item-selected.model';
import { Subscription } from 'rxjs';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'super-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.css']
})
export class QuickViewComponent implements OnInit, OnDestroy {
  @Input() public preSelectedProductItem: ProductsItemShortModel = null;
  public ICON = RESOURCE.ASSETS.IMAGE.ICON;
  public controlsLeftArrowActivity: boolean = false;
  public controlsRightArrowActivity: boolean = true;
  public preSelectedProductItemOption: ProductItemOptionModel;
  public selectedProduct: ProductItemSelectedModel;

  constructor(private quickViewService: QuickViewService, private productService: ProductService) {}

  public ngOnInit(): void {
    this.initProductItem();
  }
  public ngOnDestroy(): void {}
  public closeQuickViewWindow(event: MouseEvent): void {
    if (event) {
      // Catch Overlay
    } else {
      this.quickViewService.setQuickViewProduct(null);
    }
  }
  public calculateSalePercent(): string {
    return 'save ' + (100 - (this.preSelectedProductItem.price / this.preSelectedProductItem.oldPrice * 100)).toFixed(0).toString() + '%';
  }
  public initProductItem(): void {
    this.selectedProduct = new ProductItemSelectedModel(this.preSelectedProductItem.id, this.preSelectedProductItem.colorId, this.preSelectedProductItem.sizeId, 1);
    setTimeout(() => {
      this.productService.getProductOption(this.preSelectedProductItem.id).subscribe((payload: ProductItemOptionModel) => this.preSelectedProductItemOption = payload);
    }, 500);
  }
  public selectProductColorMethod(colorId: string): void {
    this.selectedProduct.colorId = colorId;
  }
  public selectProductSizeMethod(sizeId: string): void {
    this.selectedProduct.sizeId = sizeId;
  }
  public changeProductQuantity(dir: number): void {
    if (dir === 1 && this.selectedProduct.quantity < 12) {
      this.selectedProduct.quantity++;
    } else if (dir === -1 && this.selectedProduct.quantity - 1 > 0) {
      this.selectedProduct.quantity--;
    }
  }
}
