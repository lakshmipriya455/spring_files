import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerInvntoryService } from '../service/customer-invntory.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  malecount: number;
  femalecount: number;
  constructor(private inv: CustomerInvntoryService) {
    this.malecount = 0;
    this.femalecount = 0;
  }

  ngOnInit() {
    this.customers = this.inv.getAllCustomers();
    for (let i in this.customers) {
      if (this.customers[i].gender == 'Male') {
        this.malecount++;
      }
      else {
        this.femalecount++;
      }

    }
  }
}
