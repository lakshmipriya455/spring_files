import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerInvntoryService {
  private customers: Customer[];
  constructor() {
    this.customers = [];
  }
  add(cus: Customer) {
    this.customers.push(cus);
  }
  getAllCustomers() {
    return this.customers;
  }
}
