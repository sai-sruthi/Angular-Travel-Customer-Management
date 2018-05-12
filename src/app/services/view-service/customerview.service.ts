import { Injectable } from '@angular/core';

@Injectable()
export class CustomerviewService {
  customer;
  constructor() { }

setcustomer(customersent){

 this.customer=customersent;
// console.log(this.vehicle);
}

getcustomer() {
  //console.log(this.vehicle);
  return this.customer;
}
}
