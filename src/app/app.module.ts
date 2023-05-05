import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home/home.component';
import { CustomerComponent } from './components/users/customer/customer.component';
import { LoginComponent } from './components/log-reg/login/login.component';
import { RegisterComponent } from './components/log-reg/register/register.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { ProductsComponent } from './components/products/products/products.component';
import { CatalogComponent } from './components/catalog/catalog/catalog.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { CategoryComponent } from './components/category/category/category.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CustomerAccountComponent } from './components/Account/customer-account/customer-account.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProductsComponent,
    CatalogComponent,
    CartComponent,
    CategoryComponent,
    CheckoutComponent,
    ProductDetailsComponent,
    CustomerAccountComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
