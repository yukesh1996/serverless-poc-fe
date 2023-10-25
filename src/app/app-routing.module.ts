import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScraperComponent} from './scraper/scraper.component';
import {ProductComponent} from './product/product.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'scraper', component: ScraperComponent },
  { path: 'product', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
