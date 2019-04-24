import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeroOfferModel, OfferModel} from './home.model';
import { RESOURCE } from '../../resource';
import { QuickViewService } from '../../common/components/quick-view/quick-view.service';
import { ProductsItemShortModel } from '../../common/models/product-item-short.model';
import {OfferService} from '../../common/service/offer.service';
import {Subscription} from 'rxjs';
import {ProductService} from '../../common/service/product.service';

@Component({
  selector: 'super-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  public ICON = RESOURCE.ASSETS.IMAGE.ICON;
  public heroSectionHeroModel: HeroOfferModel;
  public newProductsSectionLeftArrowActivity: boolean = false;
  public newProductsSectionRightArrowActivity: boolean = true;
  public newProductsSectionProductsArray: ProductsItemShortModel[] = [];
  public offerSectionOfferArray: OfferModel[] = [];

  private heroSectionSubscription: Subscription;
  private newProductsSectionSubscription: Subscription;

  constructor(private offerService: OfferService, private productService: ProductService) {}

  public ngOnInit(): void {
    this.newProductsSectionProductsArrayReset();
    this.offerSectionOfferArrayReset();
    this.newProductsSectionSubscription = this.productService.getNewProductList().subscribe((payload: ProductsItemShortModel[]) => this.newProductsSectionProductsArray = payload);
    this.heroSectionSubscription = this.offerService.getHomeOffer().subscribe((payload: HeroOfferModel) => this.heroSectionHeroModel = payload);
  }
  public ngOnDestroy(): void {
    this.heroSectionSubscription.unsubscribe();
    this.newProductsSectionSubscription.unsubscribe();
  }
  public newProductsSectionProductsArrayReset(): void {
    for (let i = 0; i < 8; i++) {
      this.newProductsSectionProductsArray.push(new ProductsItemShortModel(null, null, null, null, null, null, false, false, null));
    }
  }
  public offerSectionOfferArrayReset(): void {
    for (let i = 0; i < 3; i++) {
      this.offerSectionOfferArray.push(new OfferModel(null, null, false, null));
    }
    this.offerSectionOfferArray[this.offerSectionOfferArray.length - 1].important = true;
  }
}
