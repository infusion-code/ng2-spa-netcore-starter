import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from '../../components/error';
import { HelloWorldComponent } from '../../components/helloworld';
import { CardsAndTilesComponent} from '../../components/cards-and-tiles';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },   
    { path: 'home', component: HelloWorldComponent, pathMatch: 'full', data: { breadcrumb: 'Getting started with ng2 and NetCore' } },
    { path: 'error', component: ErrorComponent, data: { breadcrumb: 'Error' } },
    { path: 'nav1', component: CardsAndTilesComponent, data: { breadcrumb: 'Cards and Tiles'}},
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }