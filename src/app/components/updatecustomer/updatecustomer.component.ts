import { Component, OnInit } from '@angular/core';
import {customerModel} from '../../shared/models/customer.model';
import {CustomerListService} from "../../services/storage-service/customer-list.service";
import {CustomerupdateService} from '../../services/update-customer/customerupdate.service'
import {Router,ActivatedRoute,Params} from "@angular/router";

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {

  constructor(private _customerservice:CustomerListService,private router:Router, private _customerupdateservice:CustomerupdateService) { }

  ngOnInit() {
  }
  customers = this._customerservice.getCustomers();
  model:customerModel=this._customerupdateservice.getcustomer();
   //model = new customerModel(this.customer_id+1,"",0,"","","",0,false,0,0);
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
        this._customerservice.updateCustomer(this.model);
        this.router.navigate(['']);
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
        if(this.customers[i].id!=this.model.id){
           if(this.customers[i].mobileNo==this.model.mobileNo){
               return false;
           } 
        }
      }
      return true;
  }
}
