import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { QuickViewService } from './quick-view.service';
import { RESOURCE } from '../../../resource';
import { ProductsItemShortModel } from '../../models/product-item-short.model';
import { ProductItemOptionModel } from '../../models/product-item-option.model';
import { ProductItemSelectedModel } from '../../models/product-item-selected.model';
import { Subscription } from 'rxjs';
import { ProductService } from '../../service/product.service';
import { ProductItemFullModel } from "../../models/product-item-full.model";

@Component({
  selector: 'super-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.css']
})
export class QuickViewComponent implements OnInit, OnDestroy {
  @Input() public preSelectedProductItem: ProductItemFullModel = null;
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
  public closeQuickViewWindow(): void {
    this.quickViewService.setQuickViewProduct(null);
  }
  public calculateSalePercent(): string {
    return 'save ' + (100 - (this.preSelectedProductItem.price / this.preSelectedProductItem.oldPrice * 100)).toFixed(0).toString() + '%';
  }
  public initProductItem(): void {
    this.selectedProduct = new ProductItemSelectedModel(this.preSelectedProductItem.id, this.preSelectedProductItem.color[0].colorHEX, this.preSelectedProductItem.size[0], 1);
    this.productService.getProductOption(this.preSelectedProductItem.id).subscribe((payload: ProductItemOptionModel) => this.preSelectedProductItemOption = payload);
  }
  public selectProductColorMethod(colorHEX: string): void {
    this.selectedProduct.colorHEX = colorHEX;
  }
  public selectProductSizeMethod(size: number): void {
    this.selectedProduct.size = size;
  }
  public changeProductQuantity(dir: number): void {
    if (dir === 1 && this.selectedProduct.quantity < 12) {
      this.selectedProduct.quantity++;
    } else if (dir === -1 && this.selectedProduct.quantity - 1 > 0) {
      this.selectedProduct.quantity--;
    }
  }
}
