import { ComparadorPage } from './../page/comparador/comparador.page';
import { DetailCarPage } from './../page/detail-car/detail-car.page';
import { HomePage } from './../page/home/home.page';
import { ROUTES } from "./routes";
import { Routes } from '@angular/router';


export const APP_ROUTER: Routes = [
    {
        path:ROUTES.HOME,
        component: HomePage
    },
    {
        path: ROUTES.COMPARADOR,
        component: ComparadorPage  
    },
    {
        path:`${ROUTES.HOME}/:id`,
        component: DetailCarPage
    },
    {
        path: '',
        redirectTo: ROUTES.HOME,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ROUTES.HOME,
        pathMatch: 'full'
    }
];


