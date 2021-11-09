import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//MAT imports
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBadgeModule} from '@angular/material/badge';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DealersComponent } from './components/dealers/dealers.component';
import { ClientsComponent } from './components/clients/clients.component';
import { StaffComponent } from './components/staff/staff.component';
import { CountryComponent } from './components/country/country.component';
import { AddCountryComponent } from './dialogs/add-country/add-country.component';
import { UpdateCountryComponent } from './dialogs/update-country/update-country.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { UpdateCurrencyComponent } from './dialogs/update-currency/update-currency.component';
import { AddCurrencyComponent } from './dialogs/add-currency/add-currency.component';
import { SafehtmlPipe } from './pipes/safehtml.pipe';
import { StateComponent } from './components/state/state.component';
import { AddStateComponent } from './dialogs/add-state/add-state.component';
import { UpdateStateComponent } from './dialogs/update-state/update-state.component';
import { DistrictComponent } from './components/district/district.component';
import { AddDistrictComponent } from './dialogs/add-district/add-district.component';
import { UpdateDistrictComponent } from './dialogs/update-district/update-district.component';
import { PinComponent } from './components/pin/pin.component';
import { AddPinComponent } from './dialogs/add-pin/add-pin.component';
import { UpdatePinComponent } from './dialogs/update-pin/update-pin.component';
import { UomComponent } from './components/uom/uom.component';
import { AddUomComponent } from './dialogs/add-uom/add-uom.component';
import { UpdateUomComponent } from './dialogs/update-uom/update-uom.component';
import { ContactGroupComponent } from './components/contact-group/contact-group.component';
import { AddContactGroupComponent } from './dialogs/add-contact-group/add-contact-group.component';
import { UpdateContactGroupComponent } from './dialogs/update-contact-group/update-contact-group.component';
import { ContactCategoryComponent } from './components/contact-category/contact-category.component';
import { AddContactCategoryComponent } from './dialogs/add-contact-category/add-contact-category.component';
import { UpdateContactCategoryComponent } from './dialogs/update-contact-category/update-contact-category.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './dialogs/add-contact/add-contact.component';
import { TaxGroupComponent } from './components/tax-group/tax-group.component';
import { AddTaxGroupComponent } from './dialogs/add-tax-group/add-tax-group.component';
import { UpdateTaxGroupComponent } from './dialogs/update-tax-group/update-tax-group.component';
import { TaxCategoryComponent } from './components/tax-category/tax-category.component';
import { AddTaxCategoryComponent } from './dialogs/add-tax-category/add-tax-category.component';
import { UpdateTaxCategoryComponent } from './dialogs/update-tax-category/update-tax-category.component';
import { TaxComponent } from './components/tax/tax.component';
import { AddTaxComponent } from './dialogs/add-tax/add-tax.component';
import { UpdateTaxComponent } from './dialogs/update-tax/update-tax.component';
import { HsnGroupComponent } from './components/hsn-group/hsn-group.component';
import { HsnCategoryComponent } from './components/hsn-category/hsn-category.component';
import { HsnComponent } from './components/hsn/hsn.component';
import { AddHsnComponent } from './dialogs/add-hsn/add-hsn.component';
import { UpdateHsnComponent } from './dialogs/update-hsn/update-hsn.component';
import { AddHsnGroupComponent } from './dialogs/add-hsn-group/add-hsn-group.component';
import { UpdateHsnGroupComponent } from './dialogs/update-hsn-group/update-hsn-group.component';
import { AddHsnCategoryComponent } from './dialogs/add-hsn-category/add-hsn-category.component';
import { UpdateHsnCategoryComponent } from './dialogs/update-hsn-category/update-hsn-category.component';
import { SacComponent } from './components/sac/sac.component';
import { SacCategoryComponent } from './components/sac-category/sac-category.component';
import { SacGroupComponent } from './components/sac-group/sac-group.component';
import { AddSacComponent } from './dialogs/add-sac/add-sac.component';
import { UpdateSacComponent } from './dialogs/update-sac/update-sac.component';
import { AddSacCategoryComponent } from './dialogs/add-sac-category/add-sac-category.component';
import { UpdateSacCategoryComponent } from './dialogs/update-sac-category/update-sac-category.component';
import { AddSacGroupComponent } from './dialogs/add-sac-group/add-sac-group.component';
import { UpdateSacGroupComponent } from './dialogs/update-sac-group/update-sac-group.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { PromotionGroupComponent } from './components/promotion-group/promotion-group.component';
import { PromotionCategoryComponent } from './components/promotion-category/promotion-category.component';
import { AddPromotionComponent } from './dialogs/add-promotion/add-promotion.component';
import { UpdatePromotionComponent } from './dialogs/update-promotion/update-promotion.component';
import { AddPromotionGroupComponent } from './dialogs/add-promotion-group/add-promotion-group.component';
import { AddPromotionCategoryComponent } from './dialogs/add-promotion-category/add-promotion-category.component';
import { UpdatePromotionGroupComponent } from './dialogs/update-promotion-group/update-promotion-group.component';
import { UpdatePromotionCategoryComponent } from './dialogs/update-promotion-category/update-promotion-category.component';
import { UserTypeComponent } from './components/user-type/user-type.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserTypesComponent } from './dialogs/add-user-types/add-user-types.component';
import { UpdateUserTypesComponent } from './dialogs/update-user-types/update-user-types.component';
import { AddUserComponent } from './dialogs/add-user/add-user.component';
import { UpdateUserComponent } from './dialogs/update-user/update-user.component';
import { SellerComponent } from './components/seller/seller.component';
import { SellerCategoryComponent } from './components/seller-category/seller-category.component';
import { SellerGroupComponent } from './components/seller-group/seller-group.component';
import { AddSellerComponent } from './dialogs/add-seller/add-seller.component';
import { UpdateSellerComponent } from './dialogs/update-seller/update-seller.component';
import { AddSellerCategoryComponent } from './dialogs/add-seller-category/add-seller-category.component';
import { UpdateSellerCategoryComponent } from './dialogs/update-seller-category/update-seller-category.component';
import { AddSellerGroupComponent } from './dialogs/add-seller-group/add-seller-group.component';
import { UpdateSellerGroupComponent } from './dialogs/update-seller-group/update-seller-group.component';
import { BrandComponent } from './components/brand/brand.component';
import { BrandCategoryComponent } from './components/brand-category/brand-category.component';
import { BrandGroupComponent } from './components/brand-group/brand-group.component';
import { AddBrandComponent } from './dialogs/add-brand/add-brand.component';
import { UpdateBrandComponent } from './dialogs/update-brand/update-brand.component';
import { AddBrandGroupComponent } from './dialogs/add-brand-group/add-brand-group.component';
import { AddBrandCategoryComponent } from './dialogs/add-brand-category/add-brand-category.component';
import { UpdateBrandCategoryComponent } from './dialogs/update-brand-category/update-brand-category.component';
import { UpdateBrandGroupComponent } from './dialogs/update-brand-group/update-brand-group.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductGroupComponent } from './components/product-group/product-group.component';
import { AddProductComponent } from './dialogs/add-product/add-product.component';
import { UpdateProductComponent } from './dialogs/update-product/update-product.component';
import { AddProductCategoryComponent } from './dialogs/add-product-category/add-product-category.component';
import { UpdateProductCategoryComponent } from './dialogs/update-product-category/update-product-category.component';
import { AddProductGroupComponent } from './dialogs/add-product-group/add-product-group.component';
import { UpdateProductGroupComponent } from './dialogs/update-product-group/update-product-group.component';
import { ServiceComponent } from './components/service/service.component';
import { ServiceGroupComponent } from './components/service-group/service-group.component';
import { ServiceCategoryComponent } from './components/service-category/service-category.component';
import { AddServiceComponent } from './dialogs/add-service/add-service.component';
import { UpdateServiceComponent } from './dialogs/update-service/update-service.component';
import { AddServiceGroupComponent } from './dialogs/add-service-group/add-service-group.component';
import { UpdateServiceGroupComponent } from './dialogs/update-service-group/update-service-group.component';
import { AddServiceCategoryComponent } from './dialogs/add-service-category/add-service-category.component';
import { UpdateServiceCategoryComponent } from './dialogs/update-service-category/update-service-category.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddOrdersComponent } from './dialogs/add-orders/add-orders.component';
import { UpdateOrdersComponent } from './dialogs/update-orders/update-orders.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DealersComponent,
    ClientsComponent,
    StaffComponent,
    CountryComponent,
    AddCountryComponent,
    UpdateCountryComponent,
    CurrencyComponent,
    UpdateCurrencyComponent,
    AddCurrencyComponent,
    SafehtmlPipe,
    StateComponent,
    AddStateComponent,
    UpdateStateComponent,
    DistrictComponent,
    AddDistrictComponent,
    UpdateDistrictComponent,
    PinComponent,
    AddPinComponent,
    UpdatePinComponent,
    UomComponent,
    AddUomComponent,
    UpdateUomComponent,
    ContactGroupComponent,
    AddContactGroupComponent,
    UpdateContactGroupComponent,
    ContactCategoryComponent,
    AddContactCategoryComponent,
    UpdateContactCategoryComponent,
    ContactsComponent,
    AddContactComponent,
    TaxGroupComponent,
    AddTaxGroupComponent,
    UpdateTaxGroupComponent,
    TaxCategoryComponent,
    AddTaxCategoryComponent,
    UpdateTaxCategoryComponent,
    TaxComponent,
    AddTaxComponent,
    UpdateTaxComponent,
    HsnGroupComponent,
    HsnCategoryComponent,
    HsnComponent,
    AddHsnComponent,
    UpdateHsnComponent,
    AddHsnGroupComponent,
    UpdateHsnGroupComponent,
    AddHsnCategoryComponent,
    UpdateHsnCategoryComponent,
    SacComponent,
    SacCategoryComponent,
    SacGroupComponent,
    AddSacComponent,
    UpdateSacComponent,
    AddSacCategoryComponent,
    UpdateSacCategoryComponent,
    AddSacGroupComponent,
    UpdateSacGroupComponent,
    PromotionComponent,
    PromotionGroupComponent,
    PromotionCategoryComponent,
    AddPromotionComponent,
    UpdatePromotionComponent,
    AddPromotionGroupComponent,
    AddPromotionCategoryComponent,
    UpdatePromotionGroupComponent,
    UpdatePromotionCategoryComponent,
    UserTypeComponent,
    UsersComponent,
    AddUserTypesComponent,
    UpdateUserTypesComponent,
    AddUserComponent,
    UpdateUserComponent,
    SellerComponent,
    SellerCategoryComponent,
    SellerGroupComponent,
    AddSellerComponent,
    UpdateSellerComponent,
    AddSellerCategoryComponent,
    UpdateSellerCategoryComponent,
    AddSellerGroupComponent,
    UpdateSellerGroupComponent,
    BrandComponent,
    BrandCategoryComponent,
    BrandGroupComponent,
    AddBrandComponent,
    UpdateBrandComponent,
    AddBrandGroupComponent,
    AddBrandCategoryComponent,
    UpdateBrandCategoryComponent,
    UpdateBrandGroupComponent,
    ProductComponent,
    ProductCategoryComponent,
    ProductGroupComponent,
    AddProductComponent,
    UpdateProductComponent,
    AddProductCategoryComponent,
    UpdateProductCategoryComponent,
    AddProductGroupComponent,
    UpdateProductGroupComponent,
    ServiceComponent,
    ServiceGroupComponent,
    ServiceCategoryComponent,
    AddServiceComponent,
    UpdateServiceComponent,
    AddServiceGroupComponent,
    UpdateServiceGroupComponent,
    AddServiceCategoryComponent,
    UpdateServiceCategoryComponent,
    OrdersComponent,
    AddOrdersComponent,
    UpdateOrdersComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatRadioModule,
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatStepperModule,
    MatTooltipModule,
    MatBadgeModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
