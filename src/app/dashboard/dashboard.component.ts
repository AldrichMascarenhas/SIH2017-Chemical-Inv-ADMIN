import { Component, AfterViewInit } from '@angular/core';

import { Title }     from '@angular/platform-browser';

import { TdLoadingService, TdDigitsPipe } from '@covalent/core';

import { ItemsService, UsersService, ProductsService, AlertsService } from '../../services';

import { multi } from './data';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  viewProviders: [ ItemsService, UsersService, ProductsService, AlertsService ],
})
export class DashboardComponent  {




}
