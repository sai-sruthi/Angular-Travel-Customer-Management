import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CustomerslistComponent } from './components/customerslist/customerslist.component';
import {PagenotfoundComponent} from './shared/pagenotfound/pagenotfound.component';
import { ViewcustomerComponent } from './components/viewcustomer/viewcustomer.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';

import {Routes, RouterModule} from '@angular/router';
import { UpdatecustomerComponent } from './components/updatecustomer/updatecustomer.component';

const appRoutes: Routes=[
    {
        path: '',
        component: CustomerslistComponent,
        children: [{
            path: 'view',
            component: ViewcustomerComponent
        },
        {
            path: 'add',
            component: AddCustomerComponent
        },
        {
            path: 'update',
            component: UpdatecustomerComponent
        },
        ]

    },
    {
        path: '**',
        component: PagenotfoundComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    CustomerslistComponent,
    ViewcustomerComponent,
    AddCustomerComponent,
    UpdatecustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
