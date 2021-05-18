import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Billing } from '../billing';
import { BillingListComponent } from '../billing-list/billing-list.component';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-create-billing',
  templateUrl: './create-billing.component.html',
  styleUrls: ['./create-billing.component.css']
})
export class CreateBillingComponent implements OnInit {

  billing: Billing = new Billing();
  @ViewChild('createForm') createForm: NgForm;

  constructor(private billingService: BillingService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.billing);
    if(this.billing.priceOriginal != null && this.billing.priceOriginal <= 0){
      alert("O Valor precisa ser maior que 0.");
    }else if(!this.createForm.valid){
      alert("Formulário inválido. Verifique.");
    }else{
      this.saveBilling();
    }
  }

  saveBilling(){
    this.billingService.createBilling(this.billing).subscribe(data => {
        alert("Cadastro criado com sucesso.");
        window.location.reload();
      },
      error => {
        console.log(error);
        alert("Ocorreu um erro no cadastro da conta, veja o log gerado no console.");
      }
    );
  }

}
