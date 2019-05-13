import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RESOURCE } from '../../../resource';
import { ItemCarouselAdvancedModel } from './item-carousel-advanced.model';

@Component({
  selector: 'super-item-carousel-advanced',
  templateUrl: './item-carousel-advanced.component.html',
  styleUrls: ['./item-carousel-advanced.component.css']
})
export class ItemCarouselAdvancedComponent implements OnInit {
  @ViewChild('railReference') public railReference: ElementRef;
  @Input() public array: ItemCarouselAdvancedModel[] = [];
  @Input() public itemsToShow: number = 4;

  public ICON = RESOURCE.ASSETS.IMAGE.ICON;
  public leftArrowActivity: boolean = false;
  public rightArrowActivity: boolean = false;

  constructor() { }

  public ngOnInit(): void {}
}
