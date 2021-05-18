import { Component, OnInit } from '@angular/core';
import { Billing } from '../billing';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-billing-list',
  templateUrl: './billing-list.component.html',
  styleUrls: ['./billing-list.component.css']
})
export class BillingListComponent implements OnInit {

  billings: Billing[];

  constructor(private billingService: BillingService) { }

  ngOnInit(): void {
    this.getBillings();
  }

  private getBillings(){
    this.billingService.getBillingList().subscribe(data => {
      this.billings = data.reverse()
    });
  }

}
