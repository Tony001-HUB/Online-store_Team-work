import { NgModule } from '@angular/core';
import {AllNewsComponent} from "./news/all-news/all-news.component";
import {NewsComponent} from "./news/news.component";
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import { GoodsComponent } from './goods/goods.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {NewsDescriptionComponent} from "./news/news-description/news-description.component";
import {AboutComponent} from "./about/about.component";
import {WarrantyComponent} from "./warranty/warranty.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {StockComponent} from "./stock/stock.component";
import {DropComponent} from "./drop/drop.component";

const routes: Routes = [
  {path: '', redirectTo: 'home/catalog', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'home', component: MainLayoutComponent, children: [
    {path: 'catalog', component: GoodsComponent},
    {path: 'news', component: NewsComponent},
    {path: 'news/:id', component: AllNewsComponent},
    {path: 'modalInfo', component: NewsDescriptionComponent},
    {path: 'about', component: AboutComponent},
    {path: 'warranty', component: WarrantyComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'stock', component: StockComponent},
    {path: 'drop', component: DropComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
