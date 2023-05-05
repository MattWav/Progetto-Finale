import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAccountComponent } from './components/Account/customer-account/customer-account.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { CatalogComponent } from './components/catalog/catalog/catalog.component';
import { CategoryComponent } from './components/category/category/category.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/log-reg/login/login.component';
import { RegisterComponent } from './components/log-reg/register/register.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products/products.component';
import { AdminComponent } from './components/users/admin/admin.component';
import { CustomerComponent } from './components/users/customer/customer.component';
import { AuthAdminGuard } from './guard/auth-admin.guard';
import { AuthCustomerGuard } from './guard/auth-customer.guard';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'customer/:id',
    component: CustomerComponent,
    canActivate: [AuthGuard, AuthCustomerGuard],
  },
  {
    path: 'admin/:id',
    component: AdminComponent,
    canActivate: [AuthGuard, AuthAdminGuard]


  },

  { path: 'admin/:id/products', component: ProductsComponent,canActivate: [AuthGuard, AuthAdminGuard]},

  { path: 'admin/:id/catalog', component: CatalogComponent,canActivate: [AuthGuard, AuthAdminGuard] },

  { path: 'home/catalog', component: CatalogComponent },
  { path: 'catalog/:productID', component: ProductDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'customer/:id/checkout', component: CheckoutComponent, canActivate: [AuthGuard, AuthCustomerGuard]},
  { path: 'customer/:id/catalog', component: CatalogComponent},
  { path: 'customer/:userID/account', component: CustomerAccountComponent, canActivate: [AuthGuard, AuthCustomerGuard]},
  { path: 'admin/:id/category', component: CategoryComponent,canActivate: [AuthGuard, AuthAdminGuard] },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
