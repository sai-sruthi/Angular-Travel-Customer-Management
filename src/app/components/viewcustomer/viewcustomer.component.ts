import { Component, OnInit } from '@angular/core';
import {CustomerviewService} from '../../services/view-service/customerview.service';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {
  customer;
  constructor(private _viewvehicle: CustomerviewService, private routes: Router) { 
    this.customer = this._viewvehicle.getcustomer();
    // console.log(this.vehicle);
  }

  ngOnInit() {

  }
  goback(){
    this.routes.navigate(['']);
  }

}
