import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllNewsComponent} from "./news/all-news/all-news.component";
import {NewsComponent} from "./news/news.component";
import {GoodsComponent} from "./goods/goods.component";
import {MainLayoutComponent} from "./main-layout/main-layout.component";

const routes: Routes = [
  {path: 'home', component: MainLayoutComponent, children: [
    {path: 'catalog', component: GoodsComponent},
    {path: 'news', component: NewsComponent},
    {path: 'all-news', component: AllNewsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
