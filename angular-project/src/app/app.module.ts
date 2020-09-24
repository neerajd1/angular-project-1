import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirstComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { CantactUsComponent } from './layouts/cantact-us/cantact-us.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { MobilesComponent } from './products/mobiles/mobiles.component';
import { BikesComponent } from './products/bikes/bikes.component';
import { CarsComponent } from './products/cars/cars.component';
import { BooksComponent } from './products/books/books.component';
import { LaptopsComponent } from './products/laptops/laptops.component';
import { OfferPipe } from './pipes/offer.pipe';
import { StyleDirectiveDirective } from './directives/style-directive.directive';
@NgModule({
  declarations: [FirstComponent, NavComponent, BannerOneComponent, ProductsComponent, BannerTwoComponent, CantactUsComponent, BannerThreeComponent, FooterComponent, ContactUsComponent, MobilesComponent, BikesComponent, CarsComponent, BooksComponent, LaptopsComponent, OfferPipe, StyleDirectiveDirective],
  imports: [BrowserModule],
  bootstrap: [FirstComponent],
}) 
export class FirstModule {}
