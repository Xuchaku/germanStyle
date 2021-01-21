import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import {AnimationServiceService} from './animation-service.service'
import {ProductsServiceService} from "./products-service.service"
import {AppRoutingModule} from "./app-routing.module";
import { ProductComponent } from './product/product.component'
import {EventBusService} from "./event-bus.service"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    GalleryComponent,
    FooterComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AnimationServiceService, ProductsServiceService, EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
