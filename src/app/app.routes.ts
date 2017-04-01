import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './main/main.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProducersComponent} from "./producers/producers.component";
import {ProductTypesComponent} from "./product-types/product-types.component";
import {ProductsComponent} from "./products/products.component";
import {PackagesComponent} from "./packages/packages.component";
import {LogisticsComponent} from "./logistics/logistics.component";
import {TransportsComponent} from "./transports/transports.component";
import {LogisticsServicesComponent} from "./logistics-services/logistics-services.component";
import {WarehousesComponent} from "./warehouses/warehouses.component";
import {ShipmentsComponent} from "./shipments/shipments.component";
import {EndUsersComponent} from "./end-users/end-users.component";
import {ProducersByStateComponent} from "./producers-by-state/producers-by-state.component";
import {ProductsStateComponent} from "./products-state/products-state.component";


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [{
    component: DashboardComponent,
    path: '',
  }, {
    component: ProducersComponent,
    path: 'producers',
  }, {
    component: ProductTypesComponent,
    path: 'producttypes',
  }, {
    component: ProductsComponent,
    path: 'products',
  }, {
    component: PackagesComponent,
    path: 'packages',
  }, {
    component: LogisticsComponent,
    path: 'logistics',
  }, {
    component: TransportsComponent,
    path: 'transports',
  }, {
    component: LogisticsServicesComponent,
    path: 'logisticsservices',
  }, {
    component: WarehousesComponent,
    path: 'warehouses',
  }, {
    component: ShipmentsComponent,
    path: 'shipments',
  }, {
    component: EndUsersComponent,
    path: 'users',
  }, {
    component: ProducersByStateComponent,
    path: 'producersbystate/:state',
  }, {
    component: ProductsStateComponent,
    path: 'productsbyproducer/:id',
  }
  ]
  },
];

export const appRoutingProviders: any[] = [];

export const appRoutes: any = RouterModule.forRoot(routes);
