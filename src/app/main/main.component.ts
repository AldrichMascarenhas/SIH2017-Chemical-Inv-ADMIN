import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  routes: Object[] = [
    {
      title: 'Dashboard',
      route: '/',
      icon: 'dashboard',
    },
    {
      title: 'Producers',
      route: 'producers',
      icon: 'dashboard',
    },
    {
      title: 'ProductTypes',
      route: 'producttypes',
      icon: 'dashboard',
    },
    {
      title: 'Products',
      route: 'products',
      icon: 'dashboard',
    },
    {
      title: 'Packages',
      route: 'packages',
      icon: 'dashboard',
    },
    {
      title: 'Logistics',
      route: 'logistics',
      icon: 'dashboard',
    },
    {
      title: 'Transports',
      route: 'transports',
      icon: 'dashboard',
    },
    {
      title: 'LogisticsServices',
      route: 'logisticsservices',
      icon: 'dashboard',
    },
    {
      title: 'Warehouses',
      route: 'warehouses',
      icon: 'dashboard',
    },
    {
      title: 'Shipments',
      route: 'shipments',
      icon: 'dashboard',
    },
    {
      title: 'EndUsers',
      route: 'users',
      icon: 'dashboard',
    }
  ];

  constructor(private _router: Router) {
  }

  logout(): void {
    this._router.navigate(['/login']);
  }
}
