import { NgModule } from '@angular/core';
import {AllNewsComponent} from "./news/all-news/all-news.component";
import {NewsComponent} from "./news/news.component";
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import { GoodsComponent } from './goods/goods.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {NewsDescriptionComponent} from "./news/news-description/news-description.component";

const routes: Routes = [
  {path: '', redirectTo: 'home/catalog', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'home', component: MainLayoutComponent, children: [
    {path: 'news/:id', component: AllNewsComponent},
    {path: 'modalInfo', component: NewsDescriptionComponent},
    {path: 'catalog', component: GoodsComponent},
    {path: 'news', component: NewsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
