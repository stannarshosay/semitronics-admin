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
