import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navpage/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LogindashbordComponent } from './pages/logindashbord/logindashbord.component';
import { BuyerComponent } from './pages/buyer/buyer.component';
import { SellerComponent } from './pages/seller/seller.component';
import { BuyerLoginComponent } from './pages/buyer-login/buyer-login.component';
import { BuyerRegisterComponent } from './pages/buyer-register/buyer-register.component';
import { SellerLoginComponent } from './pages/seller-login/seller-login.component';
import { SellerRegisterComponent } from './pages/seller-register/seller-register.component';
import { BuyerSelectionComponent } from './pages/buyer-selection/buyer-selection.component';
import { SellerUploadingComponent } from './pages/seller-uploading/seller-uploading.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BuyingComponent } from './pages/buying/buying.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    LogindashbordComponent,
    BuyerComponent,
    SellerComponent,
    BuyerLoginComponent,
    BuyerRegisterComponent,
    SellerLoginComponent,
    SellerRegisterComponent,
    BuyerSelectionComponent,
    SellerUploadingComponent,
    DashboardComponent,
    HomeDashboardComponent,
    AddpropertyComponent,
    BuyingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
