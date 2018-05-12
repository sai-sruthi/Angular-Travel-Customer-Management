import { Component } from '@angular/core';

import {CustomerslistComponent } from './components/customerslist/customerslist.component';
import {ViewcustomerComponent} from "./components/viewcustomer/viewcustomer.component";
import {AddCustomerComponent } from './components/add-customer/add-customer.component';
import {PagenotfoundComponent} from './shared/pagenotfound/pagenotfound.component';


import {CustomerListService} from "./services/storage-service/customer-list.service";
import {CustomerviewService} from "./services/view-service/customerview.service";
import {CustomerupdateService} from "./services/update-customer/customerupdate.service"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 entryComponents: [CustomerslistComponent, ViewcustomerComponent, AddCustomerComponent, PagenotfoundComponent],
 providers:[CustomerListService, CustomerviewService, CustomerupdateService]

})
export class AppComponent {
}
