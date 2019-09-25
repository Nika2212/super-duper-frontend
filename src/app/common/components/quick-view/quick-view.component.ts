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

export class QuickViewComponent {
  constructor() {}
}
