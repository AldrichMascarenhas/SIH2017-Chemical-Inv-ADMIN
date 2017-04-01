import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ProducersRootModel} from "../interface/producers";
import {ProductRootObject} from "../interface/products";
import {WarehouseRootObject} from "../interface/warehouse";
import {Http} from "@angular/http";

@Injectable()
export class APIServiceService {


  constructor(private http: Http) {

  }



  GETproducerinstate(state: string) : Observable<ProducersRootModel[]>{
    return this.http.get(`http://192.168.43.150:3000/producersforstate?state=${state}`)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }


  GETproductsinProducer(id: number) : Observable<ProductRootObject[]>{
    return this.http.get(`http://192.168.43.150:3000/producers/${id}/products`)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }


  GETwarehouseinstate(state: string) : Observable<WarehouseRootObject[]>{
    return this.http.get(`http://192.168.43.150:3000/warehousesforstate?state=${state}`)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }




  //
  // GETshowallproducttypes() : Observable<MenuGroupOption[]>{
  //   return this.http.get(`showallproducttypes`)
  //     .map(res => res.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error')
  //     );
  // }
  //
  // GETshowallproducts() : Observable<MenuGroupOption[]>{
  //   return this.http.get(`showallproducts`)
  //     .map(res => res.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error')
  //     );
  // }
  //
  // GETshowallpackages() : Observable<MenuGroupOption[]>{
  //   return this.http.get(`showallpackages`)
  //     .map(res => res.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error')
  //     );
  // }
  //
  // GETshowalllogistics() : Observable<MenuGroupOption[]>{
  //   return this.http.get(`showalllogistics`)
  //     .map(res => res.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error')
  //     );
  // }
  //
  // GETshowalltransports() : Observable<MenuGroupOption[]>{
  //   return this.http.get(`showalltransports`)
  //     .map(res => res.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error')
  //     );
  // }
  //
  // GETshowalllogisticservices() : Observable<MenuGroupOption[]>{
  //   return this.http.get(`showalllogisticservices`)
  //     .map(res => res.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error')
  //     );
  // }
  //
  // GETshowallwarehouses() : Observable<MenuGroupOption[]>{
  //   return this.http.get(`showallwarehouses`)
  //     .map(res => res.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error')
  //     );
  // }
  //
  // GETshowallshipments() : Observable<MenuGroupOption[]>{
  //   return this.http.get(`showallshipments`)
  //     .map(res => res.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error')
  //     );
  // }

}
