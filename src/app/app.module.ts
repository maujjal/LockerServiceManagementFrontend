import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './SignIn/sign-in/sign-in.component';
import { SignUpComponent } from './SignUp/sign-up/sign-up.component';
import { HeaderComponent } from './Header-Footer/header/header.component';
import { FooterComponent } from './Header-Footer/footer/footer.component';
import { MenuComponent } from './LSMenu/menu/menu.component';
import { HomeComponent } from './HomePageDashboard/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './LSM/DrawerAllocate/create/create.component';
import { UpdateGetComponent } from './LSM/DrawerAllocate/update-get/update-get.component';
import { DLCreateComponent } from './LSM/DrawerRelease/dlcreate/dlcreate.component';
import { DLGetUpdateComponent } from './LSM/DrawerRelease/dlget-update/dlget-update.component';
import { LSCreateComponent } from './LSM/LockerSpecification/lscreate/lscreate.component';
import { LSGetUpdateComponent } from './LSM/LockerSpecification/lsget-update/lsget-update.component';
import { BICreateComponent } from './LSM/BrandInfo/bicreate/bicreate.component';
import { VICreateComponent } from './LSM/VendorInfo/vicreate/vicreate.component';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    CreateComponent,
    UpdateGetComponent,
    DLCreateComponent,
    DLGetUpdateComponent,
    LSCreateComponent,
    LSGetUpdateComponent,
    BICreateComponent,
    VICreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    ScrollingModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    
    // MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
