import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeroOfferModel, OfferModel} from './home.model';
import { RESOURCE } from '../../resource';
import { ProductsItemShortModel } from '../../common/models/product-item-short.model';
import { OfferService } from '../../common/service/offer.service';
import { Subscription } from 'rxjs';
import { ProductService } from '../../common/service/product.service';
import { BrandService } from '../../common/service/brand.service';
import { ItemCarouselAdvancedModel } from '../../common/components/item-carousel-advanced/item-carousel-advanced.model';

@Component({
  selector: 'super-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  public ICON = RESOURCE.ASSETS.IMAGE.ICON;
  public newProductsSectionArray: ProductsItemShortModel[] = [];
  public bestsellerProductsSectionArray: ProductsItemShortModel[] = [];
  public featuredProductsSectionArray: ProductsItemShortModel[] = [];
  public heroOfferSectionElement: HeroOfferModel;
  public offerSectionArray: OfferModel[] = [];
  public brandSectionArray: ItemCarouselAdvancedModel[] = [];
  public newProductsSectionLength: number;
  public bestsellerProductsSectionLength: number;
  public featuredProductsSectionLength: number;
  public brandSectionLength: number;

  private newProductsSectionSubscription: Subscription;
  private bestsellerProductsSectionSubscription: Subscription;
  private featuredProductsSectionSubscription: Subscription;
  private heroOfferSectionSubscription: Subscription;
  private heroSectionSubscription: Subscription;
  private brandSectionSubscription: Subscription;

  constructor(private offerService: OfferService, private productService: ProductService, private brandService: BrandService) {}

  public ngOnInit(): void {
    this.newProductsSectionProductsArrayReset();
    this.offerSectionOfferArrayReset();
    this.bestsellerSectionArrayReset();
    this.featuredSectionArrayReset();
    this.brandSectionArrayReset();
    this.newProductsSectionSubscription = this.productService.getNewProducts().subscribe((payload: ProductsItemShortModel[]) => this.newProductsSectionArray = payload);
    this.heroSectionSubscription = this.offerService.getHomeOffer().subscribe((payload: HeroOfferModel) => this.heroOfferSectionElement = payload);
    this.bestsellerProductsSectionSubscription = this.productService.getBestsellerProducts().subscribe((payload: ProductsItemShortModel[]) => this.bestsellerProductsSectionArray = payload);
    this.featuredProductsSectionSubscription = this.productService.getFeaturedProducts().subscribe((payload: ProductsItemShortModel[]) => this.featuredProductsSectionArray = payload);
    this.brandSectionSubscription = this.brandService.getTopBrands().subscribe((payload: ItemCarouselAdvancedModel[]) => this.brandSectionArray = payload);
  }
  public ngOnDestroy(): void {
    this.heroSectionSubscription.unsubscribe();
    this.newProductsSectionSubscription.unsubscribe();
  }
  public newProductsSectionProductsArrayReset(): void {
    for (let i = 0; i < 8; i++) {
      this.newProductsSectionArray.push(new ProductsItemShortModel(null, null, null, null, null, null, false, false, null));
    }
  }
  public offerSectionOfferArrayReset(): void {
    for (let i = 0; i < 3; i++) {
      this.offerSectionArray.push(new OfferModel(null, null, false, null));
    }
    this.offerSectionArray[this.offerSectionArray.length - 1].important = true;
  }
  public bestsellerSectionArrayReset(): void {
    for (let i = 0; i < 4; i++) {
      this.bestsellerProductsSectionArray.push(new ProductsItemShortModel(null, null, null, null, null, null, false, false, null));
    }
  }
  public featuredSectionArrayReset(): void {
    for (let i = 0; i < 4; i++) {
      this.featuredProductsSectionArray.push(new ProductsItemShortModel(null, null, null, null, null, null, false, false, null));
    }
  }
  public brandSectionArrayReset(): void {
    for (let i = 0; i < 8; i++) {
      this.brandSectionArray.push(new ItemCarouselAdvancedModel(null, null, null));
    }
  }
}
