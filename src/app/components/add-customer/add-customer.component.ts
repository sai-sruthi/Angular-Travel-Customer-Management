import { Component, OnInit } from '@angular/core';
import {customerModel} from '../../shared/models/customer.model';

import {CustomerListService} from "../../services/storage-service/customer-list.service";

import {Router,ActivatedRoute,Params} from "@angular/router";
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
  //entryComponents: [vehicleModel]
})
export class AddCustomerComponent implements OnInit {
 
  constructor(private _customerservice:CustomerListService,private router:Router) { 

  }

  customers = this._customerservice.getCustomers();
  customer_id:number=this.getcustomerid();
  model = new customerModel(this.customer_id+1,"",0,"","","",0,false,0,0);

  ngOnInit() {
      
    
  }

getcustomerid(){
   if(this.customers.length == 0){
      return 1; 
  }
  else{
    return this.customers[this.customers.length-1].id;
  }
}

  submitForm(){
   //console.log("hello");
    if(this.checkduplicates()==false){
      alert("User Mobile Number already registered");
         // console.log("hi");
      return;
    }
    else{
      if(this.checkValidAge()==false){
        alert("Select Valid Age");
        return;
      }
      if(this.checkValidCharge()==false){
        alert("Select Valid Charges");
        return;
      }
      else{
        this._customerservice.addCustomer(this.model);
        this.router.navigateByUrl("");
      }
    }
  }

  checkValidAge(){
    if(this.model.age<18 ||this.model.age>120 ){
        return false;
    }
  }

   checkValidCharge(){
    if(this.model.charges<10 ||this.model.charges>1000 ){
        return false;
    }
  }

  checkduplicates(){
      for(var i=0;i<this.customers.length;i++){
        if(this.customers[i].mobileNo==this.model.mobileNo){
          return false;
        }
      }
      return true;
  }
}
