import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { GoodsComponent } from './goods/goods.component';
import { FormsModule } from '@angular/forms';
import { AllNewsComponent } from './news/all-news/all-news.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FiltrationComponent } from './goods/filtration/filtration.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    NewsComponent,
    AllNewsComponent,
    HeaderComponent,
    SliderComponent,
    GoodsComponent,
    CatalogComponent,
    MainLayoutComponent,
    FiltrationComponent,
    SpinnerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SlickCarouselModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
