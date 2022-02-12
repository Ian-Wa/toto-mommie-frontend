import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ProductListComponent } from './shared/product-list/product-list.component';
import { OnePieceComponent } from './pages/one-piece/one-piece.component';
import { SetsComponent } from './pages/sets/sets.component';
import { DressesComponent } from './pages/dresses/dresses.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './pages/cart/cart.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactsComponent},
  {path: 'product-list', component:ProductListComponent},
  {path: 'one-piece', component:OnePieceComponent},
  {path: 'one', component:OnePieceComponent},
  {path: 'sets', component:SetsComponent},
  {path: 'dresses', component:DressesComponent},
  {path: 'accessories', component:AccessoriesComponent},
  {path: 'cart', component:CartComponent},
  {path: 'discounts', component:DiscountsComponent},
  {path: 'cart/checkout', component:CheckoutComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
