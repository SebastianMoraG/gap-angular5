import { HttpClientModule } from '@angular/common/http';
import { CarsService } from './../services/cars.service';
import { HomePage } from './../page/home/home.page';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarCardComponent } from '../components/car-card/car-card.component';
import { APP_ROUTER } from '../router/router';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { FilterByKey } from '../pipes/filterByKey.pipe';
import { DetailCarPage } from '../page/detail-car/detail-car.page';
import { DetailCardComponent } from '../components/detail-card/detail-card.component';
import { ComparadorPage } from '../page/comparador/comparador.page';


@NgModule({
  declarations: [
    FilterByKey,
    AppComponent,
    DetailCardComponent,
    CarCardComponent,
    SearchBarComponent,
    HomePage,
    DetailCarPage,
    ComparadorPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTER)
  ],
  providers: [
    CarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
