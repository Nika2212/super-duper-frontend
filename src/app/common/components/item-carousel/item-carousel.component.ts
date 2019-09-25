import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { RESOURCE } from '../../../resource';
import { ProductsItemShortModel } from '../../models/product-item-short.model';

@Component({
  selector: 'super-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.css']
})

export class ItemCarouselComponent implements OnChanges {
  @Input() public productsArray: ProductsItemShortModel[] = [];
  @Input() public carouselTitle: string;
  @Input() public show: number;
  @Output() public itemQuickViewSelect: EventEmitter<ProductsItemShortModel> = new EventEmitter<ProductsItemShortModel>();

  public ICON = RESOURCE.ASSETS.IMAGE.ICON;
  public leftArrowActivity: boolean = true;
  public rightArrowActivity: boolean = true;
  public productPackPages: any[] = [];
  public productPackCurrentPage: number = 0;

  private contentLoaded: boolean = false;

  constructor() {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (!this.contentLoaded && this.productsArray.length > 0 && this.productsArray[0].id) {
      this.contentLoaded = true;
      this.rearrangeProductPack();
      this.checkArrowActivity();
    }
  }
  public rearrangeProductPack(): void {
    for (let i = 0; i < this.productsArray.length; i++) {
      if (i === 0 || i % this.show === 0) {
        this.productPackPages.push([]);
      }
      this.productPackPages[this.productPackPages.length - 1].push(this.productsArray[i]);
    }
  }
  public onNextPage(): void {
    this.productPackCurrentPage++;
    this.checkArrowActivity();
  }
  public onPreviousPage(): void {
    this.productPackCurrentPage--;
    this.checkArrowActivity();
  }
  public checkArrowActivity(): void {
    this.leftArrowActivity = this.productPackCurrentPage !== 0;
    this.rightArrowActivity = this.productPackCurrentPage !== this.productPackPages.length - 1;
  }
}
