import {Component, Input, OnInit} from '@angular/core';
import { RESOURCE } from '../../../resource';
import { ProductsItemShortModel } from '../../models/product-item-short.model';

@Component({
  selector: 'super-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.css']
})

export class ItemCarouselComponent implements OnInit {
  @Input() public productsArray: ProductsItemShortModel[] = [];
  @Input() public carouselTitle: string;
  @Input() public length: number;

  public ICON = RESOURCE.ASSETS.IMAGE.ICON;
  public leftArrowActivity: boolean = false;
  public rightArrowActivity: boolean = false;

  constructor() {}

  public ngOnInit(): void {}
}
