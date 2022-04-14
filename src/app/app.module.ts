import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { GoodsComponent } from './goods/goods.component';
import { FormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog/catalog.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    NewsComponent,
    HeaderComponent,
    SliderComponent,
    GoodsComponent,
    CatalogComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
