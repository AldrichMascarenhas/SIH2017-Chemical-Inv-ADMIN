import { Component, OnInit } from '@angular/core';
import {APIServiceService} from "../services/apiservice.service";
import {ProducersRootModel} from "../interface/producers";
import {ITdDataTableColumn} from "@covalent/core";
import {marker} from "../interface/marker";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.scss']
})
export class ProducersComponent implements OnInit {

  ngOnInit() {


  }

  constructor(private _APIServiceService: APIServiceService, private activatedRoute: ActivatedRoute,private router: Router) {
  }

  markers: marker[] = [
    {
      lat: 28.704059,
      lng: 77.102490,
      label: 'Delhi'
    },
    {
      lat: 19.075984,
      lng: 72.877656,
      label: 'Maharashtra'
    },
    {
      lat: 27.023804,
      lng: 74.217933,
      label: 'Rajasthan'
    },
    {
      lat: 22.973423,
      lng: 78.656894,
      label: 'Madhya Pradesh'
    },
    {
      lat: 26.846709,
      lng: 80.946159,
      label: 'Uttar Pradesh'
    }
  ];


  datas: any[] = [
    {
      state: "Goa",
      quantity: 53
    },
    {
      state: "Goa",
      quantity: 45
    },
    {
      state: "Goa",
      quantity: 105
    },
    {
      state: "Goa",
      quantity: 544
    }
  ];


  columns: ITdDataTableColumn[] = [

    {name: 'State', label: 'State'},
    {name: 'Quantity', label: 'Quantity'}


  ];

  clickedMarker(label: string) {
    console.log(`clicked the marker: ${label}`)

    this.router.navigate(["producersbystate/" + label]);


  }




}
