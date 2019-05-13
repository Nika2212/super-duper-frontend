import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { RESOURCE } from '../../../resource';
import {HeaderCategoryModel, HeaderCurrencyModel, HeaderLanguageModel} from './header.model';

@Component({
  selector: 'super-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchInputReference') public searchInputReference: ElementRef;

  public ICON = RESOURCE.ASSETS.IMAGE.ICON;
  public selectedCurrency: HeaderCurrencyModel = null;
  public selectedLanguage: HeaderLanguageModel = null;
  public selectedCategory: HeaderCategoryModel = null;
  public currencyArray: HeaderCurrencyModel[] = [
    new HeaderCurrencyModel('$ US Dollar', '$'),
    new HeaderCurrencyModel('₽ RU Ruble', '₽'),
    new HeaderCurrencyModel('₾  GE Lari', '₾ ')
  ];
  public languageArray: HeaderLanguageModel[] = [
    new HeaderLanguageModel('english', 'en'),
    new HeaderLanguageModel('russian', 'ru'),
    new HeaderLanguageModel('georgian', 'geo')
  ];
  public categoryArray: HeaderCategoryModel[] = [
    new HeaderCategoryModel('01', 'men'),
    new HeaderCategoryModel('02', 'women'),
    new HeaderCategoryModel('03', 'accessories'),
    new HeaderCategoryModel('04', 'sale'),
    new HeaderCategoryModel('05', 'brand'),
    new HeaderCategoryModel('06', 'articles'),
    new HeaderCategoryModel('07', 'elements')
  ];
  public currencyDropdownState: boolean = false;
  public languageDropdownState: boolean = false;
  public categoryDropdownState: boolean = false;
  public searchInputValue: string = null;

  constructor() {}

  public ngOnInit(): void {
    this.selectedCurrency = this.currencyArray[0];
    this.selectedLanguage = this.languageArray[0];
    this.selectedCategory = this.categoryArray[0];
  }
  public toggleCurrencyDropdown(): void {
    this.currencyDropdownState = !this.currencyDropdownState;
    this.languageDropdownState = false;
  }
  public toggleLanguageDropdown(): void {
    this.currencyDropdownState = false;
    this.languageDropdownState = !this.languageDropdownState;
  }
  public toggleCategoryDropdown(): void {
    this.categoryDropdownState = !this.categoryDropdownState;
  }
  public selectCurrencyMethod(currency: HeaderCurrencyModel): void {
    this.selectedCurrency = currency;
  }
  public selectLanguageMethod(language: HeaderLanguageModel): void {
    this.selectedLanguage = language;
  }
  public selectCategoryMethod(category: HeaderCategoryModel): void {
    this.selectedCategory = category;
    this.searchInputReference.nativeElement.focus();
  }
  public clearSearchField(): void {
    this.searchInputReference.nativeElement.value = null;
    this.searchInputReference.nativeElement.focus();
  }
}
