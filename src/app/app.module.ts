import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './shared/product-list/product-list.component';
import { OnePieceComponent } from './pages/one-piece/one-piece.component';
import { SetsComponent } from './pages/sets/sets.component';
import { DressesComponent } from './pages/dresses/dresses.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    DiscountsComponent,
    CartComponent,
    CheckoutComponent,
    ProductListComponent,
    OnePieceComponent,
    SetsComponent,
    DressesComponent,
    AccessoriesComponent,
    LoginComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    MdbModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
