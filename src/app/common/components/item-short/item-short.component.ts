import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ProductsItemShortModel } from '../../models/product-item-short.model';
import { QuickViewService } from '../quick-view/quick-view.service';

@Component({
  selector: 'super-item',
  templateUrl: './item-short.component.html',
  styleUrls: ['./item-short.component.css']
})
export class ItemShortComponent {
  @Input() public item: ProductsItemShortModel = null;
  @Output() public itemQuickViewSelect: EventEmitter<ProductsItemShortModel> = new EventEmitter<ProductsItemShortModel>();

  constructor() { }

  public itemQuickSelectMethod(): void {
    this.itemQuickViewSelect.emit(this.item);
  }
}
