import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AdminComponent } from './admin/admin.component';
import { SalesmanComponent } from './salesman/salesman.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register", component:RegistrationComponent},
  {path:"", component:LoginComponent},
  {path:"buyer", component:BuyerComponent},
  {path:"salesman", component:SalesmanComponent},
  {path:"admin", component:AdminComponent},
  {path:"adDetail", component:AdDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
