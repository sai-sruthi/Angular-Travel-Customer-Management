import { Injectable } from '@angular/core';

@Injectable()
export class CustomerupdateService {
  customer;
  constructor() { }

setcustomer(customersent){

 this.customer=customersent;
// console.log(this.vehicle);
}

getcustomer(){
  //console.log(this.vehicle);
  return this.customer;
}

}
