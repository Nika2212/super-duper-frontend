import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { QuickViewComponent } from './common/components/quick-view/quick-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemShortComponent } from './common/components/item-short/item-short.component';
import { ItemCarouselComponent } from './common/components/item-carousel/item-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    QuickViewComponent,
    ItemShortComponent,
    ItemCarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
