import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
const routeMap: Routes = [
  { path: " ", component: CustomerListComponent },
  { path: "clist", component: CustomerListComponent },
  { path: "cform", component: CustomerFormComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeMap),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
