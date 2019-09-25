import {Component, ElementRef, ViewChild} from "@angular/core";
import {CartPreviewService} from "./cart-preview.service";

@Component({
  selector: 'super-cart-preview',
  templateUrl: 'cart-preview.component.html',
  styleUrls: ['cart-preview.component.css']
})

export class CartPreviewComponent {
  @ViewChild('overlayAdvanced') public overlayAdvanced: ElementRef;
  @ViewChild('asideMenu') public asideMenu: ElementRef;

  constructor(private cartPreviewService: CartPreviewService) {}

  public closeCartPreview(): void {
    this.cartPreviewService.setCartVisibilityState(false);
    this.overlayAdvanced.nativeElement.style.animationName = 'overlay-advanced-disappear';
    this.asideMenu.nativeElement.style.animationName = 'aside-menu-disappear';
  }
}
