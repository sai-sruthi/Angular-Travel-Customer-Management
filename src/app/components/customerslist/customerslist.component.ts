import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {customerModel} from '../../shared/models/customer.model';
import {CustomerListService} from '../../services/storage-service/customer-list.service';
import {CustomerviewService} from '../../services/view-service/customerview.service';
import {CustomerupdateService} from '../../services/update-customer/customerupdate.service'
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-customerslist',
  templateUrl: './customerslist.component.html',
  styleUrls: ['./customerslist.component.css']
})
export class CustomerslistComponent implements OnInit {

  customers: customerModel[];
  constructor (private router: Router, private _customerlistservice: CustomerListService,
    private _customerviewservice: CustomerviewService,
    private _customerupdateservice: CustomerupdateService) {

   }

  ngOnInit() {
   this.customers = this._customerlistservice.getCustomers();
  }

deleteCustomer(customerid){
  const ans = confirm('Are you sure?');
  if (ans === true){
    for (let i = 0; this.customers.length; i++){
        if (this.customers[i].id === customerid){
          this.customers.splice(i, 1 );
          break;
        }
      }
    this._customerlistservice.deleteCustomer(customerid);
  }
}
getcharges(id:number):number{
let charge:number;
let  customer;
  for(var i=0;this.customers.length;i++){
        if(this.customers[i].id==id){
          customer=this.customers[i];
          break;
        }
      }
if(customer.distance>0){
  if(customer.type=="Regular"){
     charge = customer.charges*customer.distance;
     if(customer.loyal==true){
        charge = charge*0.95;
      }
   }
   else{
      charge = customer.charges*customer.distance;;
      if(customer.employees>10){
        charge = charge*0.85;
      }
      else{
         charge = charge*0.90;
      }
   }
  
}

  return charge;
}
viewCustomer(customerid){
  var customer;
  for(var i=0;this.customers.length;i++){
        if(this.customers[i].id==customerid){
          customer=this.customers[i];
          break;
        }
      }

  this.router.navigate(['/view']);
  this._customerviewservice.setcustomer(customer);

}

updateCustomer(customerid){
  let customer;
  for( let i = 0; this.customers.length; i++) {
        if(this.customers[i].id === customerid) {
          customer = this.customers[i];
          break;
        }
      }

  this.router.navigate(['/update']);
  this._customerupdateservice.setcustomer(customer);

}

addCustomer(){
    this.router.navigate(['/add']);
   // this.customers=this._customerlistservice.getCustomers();
   window.location.reload();
  }
}

