import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllNewsComponent} from "./news/all-news/all-news.component";
import {NewsComponent} from "./news/news.component";

const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'all-news', component: AllNewsComponent}
];git pull origin

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
