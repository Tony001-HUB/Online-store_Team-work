import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsComponent } from './goods/goods.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path: '', redirectTo: 'home/catalog', pathMatch: 'full'},
  {path: 'home', component: MainLayoutComponent, children: [ 
    {path: 'catalog', component: GoodsComponent},
    {path: 'news', component: NewsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
