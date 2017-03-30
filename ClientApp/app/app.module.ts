import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { AppRoutingModule } from './modules/router/routing.module';
import { Http } from '@angular/http';
import { AppScaffoldModule, AppComponent, ConfigService, HeroService, CurrentNavProvider } from 'ng2-app-scaffold';
import { TilesAndCardsModule } from 'ng2-cards-and-tiles';
import { ActivatedRoute , Router } from '@angular/router';

import { ErrorComponent } from "./components/error";
import { HelloWorldComponent } from './components/helloworld';
import { CardsAndTilesComponent } from './components/cards-and-tiles';
import { ErrorService } from './services/errorService';


@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ ErrorComponent, HelloWorldComponent, CardsAndTilesComponent ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        AppScaffoldModule,
        AppRoutingModule,
        TilesAndCardsModule
    ],
    providers: [
        ErrorService,
    ]
})
export class AppModule {    
}
