import { Component, OnInit } from '@angular/core';
import {ProducersRootModel} from "../interface/producers";
import {Router, ActivatedRoute} from "@angular/router";
import {APIServiceService} from "../services/apiservice.service";
import {Subscription} from "rxjs";
import {ITdDataTableColumn} from "@covalent/core";
import {ProductRootObject} from "../interface/products";

@Component({
  selector: 'app-products-state',
  templateUrl: './products-state.component.html',
  styleUrls: ['./products-state.component.scss']
})
export class ProductsStateComponent implements OnInit {


  private id;
  private subscription: Subscription;


  constructor(private _APIServiceService: APIServiceService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  productRootObject: ProductRootObject[];


  ngOnInit() {

    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.id = param['id'];
        console.log("Accepted Producer ID Params with id : " + this.id);
      });
    this.loadMenus();

  }


  columns: ITdDataTableColumn[] = [
    {name: 'ID', label: 'ID '},

    {name: 'Name', label: 'Name '},
    {name: 'Product Type', label: 'Product Type'},
    {name: 'Description', label: 'Description'},
    {name: 'CAS Number', label: 'CAS Number'},
    {name: 'Quantity', label: 'Quantity'},
    {name: 'Quantity Type', label: 'Quantity Type'}
  ];


  loadMenus() {
    this._APIServiceService.GETproductsinProducer(this.id).subscribe(
      menus => {
        this.productRootObject = menus;
        console.log(this.productRootObject);
      },
      err => {
        // Log errors if any
        console.log(err);
      }
    );

  }

  openPrompt(ID: any): void {
    console.log("Clicked Producer with ID : " + ID);

    //https://stackoverflow.com/questions/38634237/how-do-i-navigate-to-a-sibling-route

  }
}
