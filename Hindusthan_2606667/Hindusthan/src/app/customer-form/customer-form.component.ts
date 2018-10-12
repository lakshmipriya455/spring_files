import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerInvntoryService } from '../service/customer-invntory.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { EMAIL_VALIDATOR } from '@angular/forms/src/directives/validators';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  private cus: Customer;

  constructor(private inv: CustomerInvntoryService,
    private router: Router) {
    this.cus = new Customer();
  }

  ngOnInit() {

  }
  cancel() {
    this.router.navigateByUrl("/clist");
  }
  save() {
    this.inv.add(this.cus);
    this.router.navigateByUrl("/clist");
  }
  onSubmit() {
    this.save();
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.cus));
  }
}
