import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { BuyerLoginComponent } from './pages/buyer-login/buyer-login.component';
import { BuyerRegisterComponent } from './pages/buyer-register/buyer-register.component';
import { BuyerSelectionComponent } from './pages/buyer-selection/buyer-selection.component';
import { BuyerComponent } from './pages/buyer/buyer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogindashbordComponent } from './pages/logindashbord/logindashbord.component';
import { SellerLoginComponent } from './pages/seller-login/seller-login.component';
import { SellerRegisterComponent } from './pages/seller-register/seller-register.component';
import { SellerUploadingComponent } from './pages/seller-uploading/seller-uploading.component';
import { SellerComponent } from './pages/seller/seller.component';
import { SignupComponent } from './pages/signup/signup.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {
  path:'signup',component:SignupComponent
  },
  {path:'logindashbord',component:LogindashbordComponent},
  {path:'buyer',component:BuyerComponent},
  {path:'seller',component:SellerComponent},
  {path:'buyer-login',component:BuyerLoginComponent},
  {path:'buyer-register',component:BuyerRegisterComponent},
  {path:'seller-login',component:SellerLoginComponent},
  {path:'seller-register',component:SellerRegisterComponent},
  {path:'buyer-selection',component:BuyerSelectionComponent},
  {path:'seller-uploading',component:SellerUploadingComponent},
  {path:'dashboard',component:DashboardComponent},
  {
    path:'home-dashboard',component:HomeDashboardComponent
  },
  {path:'addproperty',component:AddpropertyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
