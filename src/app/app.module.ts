import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';

import { CovalentCoreModule } from '@covalent/core';
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentChartsModule } from '@covalent/charts';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TemplatesComponent } from './templates/templates.component';
import { DashboardTemplateComponent } from './templates/dashboard/dashboard.component';
import { EmailTemplateComponent } from './templates/email/email.component';
import { EditorTemplateComponent } from './templates/editor/editor.component';
import { appRoutes, appRoutingProviders } from './app.routes';

import { ChartComponent } from '../components/chart/chart.component';

import { RequestInterceptor } from '../config/interceptors/request.interceptor';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProducersComponent } from './producers/producers.component';
import { ProductTypesComponent } from './product-types/product-types.component';
import { ProductsComponent } from './products/products.component';
import { PackagesComponent } from './packages/packages.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { TransportsComponent } from './transports/transports.component';
import { LogisticsServicesComponent } from './logistics-services/logistics-services.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { EndUsersComponent } from './end-users/end-users.component';
import { LoginComponent } from './login/login.component';
import {APIServiceService} from "./services/apiservice.service";


import { AgmCoreModule } from 'angular2-google-maps/core';
import { ProducersByStateComponent } from './producers-by-state/producers-by-state.component';
import { ProductsStateComponent } from './products-state/products-state.component';

const httpInterceptorProviders: Type<any>[] = [
  RequestInterceptor,
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    ChartComponent,
    TemplatesComponent,
    DashboardTemplateComponent,
    EmailTemplateComponent,
    EditorTemplateComponent,
    ProducersComponent,
    ProductTypesComponent,
    ProductsComponent,
    PackagesComponent,
    LogisticsComponent,
    TransportsComponent,
    LogisticsServicesComponent,
    WarehousesComponent,
    ShipmentsComponent,
    EndUsersComponent,
    LoginComponent,
    ProducersByStateComponent,
    ProductsStateComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot(),
    CovalentChartsModule.forRoot(),
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    CovalentHighlightModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    appRoutes,
    NgxChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJfmv863dXTVyOXsmNrs9bkeFqI2U_t1Q'
    })
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    httpInterceptorProviders,
    Title,
    APIServiceService
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
