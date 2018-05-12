import { Injectable } from '@angular/core';
import {Init} from "./init-customers";

@Injectable()
export class CustomerListService extends Init{

    constructor() { 
    super();
    console.log("Service Initialized");
    this.load();
  }

  getCustomers(){
      var customers=JSON.parse(localStorage.getItem('customers'));
      return customers;
  }
  getnumber(){
      var customers=JSON.parse(localStorage.getItem('customers'));
      return customers.length;
  }

  deleteCustomer(customerid){
    //var vehicledeletedarr;
    var customers=JSON.parse(localStorage.getItem('customers'));
    for(var i=0;customers.length;i++){
        if(customers[i].id==customerid){
         customers.splice(i,1);
        // vehicledeleted=vehicledeletedarr[0];
         //console.log(vehicledeleted);
          break;
        }
      }
      localStorage.setItem('customers',JSON.stringify(customers));
    
  }
 
  addCustomer(customertoadd){
    //console.log(vehicledeleted);
    var customers=JSON.parse(localStorage.getItem('customers'));
    customers.push(customertoadd);
     localStorage.setItem('customers',JSON.stringify(customers));
  }

  updateCustomer(customertoadd){
      var customers=JSON.parse(localStorage.getItem('customers'));
    for(var i=0;customers.length;i++){
        if(customers[i].id==customertoadd.id){
            customers.splice(i,1,customertoadd);
            break;
        }
      }
      localStorage.setItem('customers',JSON.stringify(customers));
  }
 
}
