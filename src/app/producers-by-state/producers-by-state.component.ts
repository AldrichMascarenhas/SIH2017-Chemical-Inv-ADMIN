import {Component, OnInit} from '@angular/core';
import {ITdDataTableColumn} from "@covalent/core";
import {ProducersRootModel} from "../interface/producers";
import {APIServiceService} from "../services/apiservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-producers-by-state',
  templateUrl: './producers-by-state.component.html',
  styleUrls: ['./producers-by-state.component.scss']
})
export class ProducersByStateComponent implements OnInit {

  private state;
  private subscription: Subscription;


  constructor(private _APIServiceService: APIServiceService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  producersRootModel: ProducersRootModel[];


  ngOnInit() {

    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.state = param['state'];
        console.log("Accepted state ID Params with id : " + this.state);
      });
    this.loadMenus();

  }


  columns: ITdDataTableColumn[] = [
    {name: 'id', label: 'id '},

    {name: 'Name', label: 'Name '},
    {name: 'Producer Type', label: 'Producer Type'},
    {name: 'Created At', label: 'Created At'},
    {name: 'State', label: 'State'},
    {name: 'Pincode', label: 'Pincode'},

  ];

  loadMenus() {
    this._APIServiceService.GETproducerinstate(this.state).subscribe(
      menus => {
        this.producersRootModel = menus;
        console.log(this.producersRootModel);
      },
      err => {
        // Log errors if any
        console.log(err);
      }
    );

  }

  openPrompt(ID: any): void {
    console.log("Clicked Producer with ID : " + ID);

    this.router.navigate(["productsbyproducer/" + ID]);

  }
}
