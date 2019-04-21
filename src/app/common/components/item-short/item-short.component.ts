import { Component, Input, OnInit } from '@angular/core';
import { ProductsItemShortModel } from '../../models/product-item-short.model';
import { QuickViewService } from '../quick-view/quick-view.service';

@Component({
  selector: 'super-item',
  templateUrl: './item-short.component.html',
  styleUrls: ['./item-short.component.css']
})
export class ItemShortComponent implements OnInit {
  @Input() public item: ProductsItemShortModel = null;

  constructor(private quickViewService: QuickViewService) { }

  ngOnInit() {
  }
  public quickViewSelectMethod(): void {
    this.quickViewService.setQuickViewProduct(this.item);
  }
}
