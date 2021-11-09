import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DealersComponent } from './components/dealers/dealers.component';
import { StaffComponent } from './components/staff/staff.component';
import { ClientsComponent } from './components/clients/clients.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { CountryComponent } from './components/country/country.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { StateComponent } from './components/state/state.component';
import { DistrictComponent } from './components/district/district.component';
import { PinComponent } from './components/pin/pin.component';
import { UomComponent } from './components/uom/uom.component';
import { ContactGroupComponent } from './components/contact-group/contact-group.component';
import { ContactCategoryComponent } from './components/contact-category/contact-category.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { TaxGroupComponent } from './components/tax-group/tax-group.component';
import { TaxCategoryComponent } from './components/tax-category/tax-category.component';
import { TaxComponent } from './components/tax/tax.component';
import { HsnGroupComponent } from './components/hsn-group/hsn-group.component';
import { HsnCategoryComponent } from './components/hsn-category/hsn-category.component';
import { HsnComponent } from './components/hsn/hsn.component';
import { SacComponent } from './components/sac/sac.component';
import { SacGroupComponent } from './components/sac-group/sac-group.component';
import { SacCategoryComponent } from './components/sac-category/sac-category.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { PromotionGroupComponent } from './components/promotion-group/promotion-group.component';
import { PromotionCategoryComponent } from './components/promotion-category/promotion-category.component';
import { UserTypeComponent } from './components/user-type/user-type.component';
import { UsersComponent } from './components/users/users.component';
import { SellerComponent } from './components/seller/seller.component';
import { SellerCategoryComponent } from './components/seller-category/seller-category.component';
import { SellerGroupComponent } from './components/seller-group/seller-group.component';
import { BrandComponent } from './components/brand/brand.component';
import { BrandGroupComponent } from './components/brand-group/brand-group.component';
import { BrandCategoryComponent } from './components/brand-category/brand-category.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductGroupComponent } from './components/product-group/product-group.component';
import { ServiceComponent } from './components/service/service.component';
import { ServiceCategoryComponent } from './components/service-category/service-category.component';
import { ServiceGroupComponent } from './components/service-group/service-group.component';
import { OrdersComponent } from './components/orders/orders.component';





const routes: Routes = [
  {path:"",redirectTo:"dashboard",pathMatch:"full"},
  {path:"login",component:LoginComponent,canActivate:[LoginGuard]},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"dealers",component:DealersComponent,canActivate:[AuthGuard]},
  {path:"clients",component:ClientsComponent,canActivate:[AuthGuard]},
  {path:"staff",component:StaffComponent,canActivate:[AuthGuard]},
  {path:"country",component:CountryComponent,canActivate:[AuthGuard]},
  {path:"currency",component:CurrencyComponent,canActivate:[AuthGuard]},
  {path:"state/:countryId/:countryName",component:StateComponent,canActivate:[AuthGuard]},
  {path:"district/:countryName/:stateId/:stateName",component:DistrictComponent,canActivate:[AuthGuard]},
  {path:"pin/:districtId/:districtName",component:PinComponent,canActivate:[AuthGuard]},
  {path:"uom",component:UomComponent,canActivate:[AuthGuard]},
  {path:"contacts",component:ContactsComponent,canActivate:[AuthGuard]},
  {path:"contact-group",component:ContactGroupComponent,canActivate:[AuthGuard]},
  {path:"tax-group",component:TaxGroupComponent,canActivate:[AuthGuard]},
  {path:"hsn-group",component:HsnGroupComponent,canActivate:[AuthGuard]},
  {path:"sac-group",component:SacGroupComponent,canActivate:[AuthGuard]},
  {path:"promotion-group",component:PromotionGroupComponent,canActivate:[AuthGuard]},
  {path:"user-type",component:UserTypeComponent,canActivate:[AuthGuard]},
  {path:"users",component:UsersComponent,canActivate:[AuthGuard]},
  {path:"seller",component:SellerComponent,canActivate:[AuthGuard]},
  {path:"seller-group",component:SellerGroupComponent,canActivate:[AuthGuard]},
  {path:"brand",component:BrandComponent,canActivate:[AuthGuard]},
  {path:"brand-group",component:BrandGroupComponent,canActivate:[AuthGuard]},
  {path:"product",component:ProductComponent,canActivate:[AuthGuard]},
  {path:"product-group",component:ProductGroupComponent,canActivate:[AuthGuard]},
  {path:"service",component:ServiceComponent,canActivate:[AuthGuard]},
  {path:"service-group",component:ServiceGroupComponent,canActivate:[AuthGuard]},
  {path:"orders",component:OrdersComponent,canActivate:[AuthGuard]},











  {path:"contact-category/:groupId/:groupName",component:ContactCategoryComponent,canActivate:[AuthGuard]},
  {path:"tax-category/:groupId/:groupName",component:TaxCategoryComponent,canActivate:[AuthGuard]},
  {path:"hsn-category/:groupId/:groupName",component:HsnCategoryComponent,canActivate:[AuthGuard]},
  {path:"sac-category/:groupId/:groupName",component:SacCategoryComponent,canActivate:[AuthGuard]},
  {path:"seller-category/:groupId/:groupName",component:SellerCategoryComponent,canActivate:[AuthGuard]},
  {path:"promotion-category/:groupId/:groupName",component:PromotionCategoryComponent,canActivate:[AuthGuard]},
  {path:"brand-category/:groupId/:groupName",component:BrandCategoryComponent,canActivate:[AuthGuard]},
  {path:"product-category/:groupId/:groupName",component:ProductCategoryComponent,canActivate:[AuthGuard]},
  {path:"service-category/:groupId/:groupName",component:ServiceCategoryComponent,canActivate:[AuthGuard]},



  
  {path:"tax",component:TaxComponent,canActivate:[AuthGuard]},
  {path:"hsn",component:HsnComponent,canActivate:[AuthGuard]},
  {path:"sac",component:SacComponent,canActivate:[AuthGuard]},
  {path:"promotion",component:PromotionComponent,canActivate:[AuthGuard]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
