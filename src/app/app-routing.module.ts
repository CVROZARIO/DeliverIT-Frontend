import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingListComponent } from './billing-list/billing-list.component';
import { CreateBillingComponent } from './create-billing/create-billing.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
