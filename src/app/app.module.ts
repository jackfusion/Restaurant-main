import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductComponent } from './component/products/product-page/product/product.component';
import { ProductPageComponent } from './component/products/product-page/product-page.component';
import { CartComponent } from './component/cart/cart.component';
import { CartEditComponent } from './component/cart/cart-edit/cart-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ProductsComponent,
    ProductComponent,
    ProductPageComponent,
    CartComponent,
    CartEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
