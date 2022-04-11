import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { GoodsComponent } from './goods/goods.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path: 'home', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
