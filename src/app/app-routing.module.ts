import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import { GoodsComponent } from './goods/goods.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'home', component: MainLayoutComponent, children: [
    {path: 'catalog', component: GoodsComponent},
    {path: 'news', component: NewsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
