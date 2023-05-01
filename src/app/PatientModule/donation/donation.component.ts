import { Component, OnInit } from '@angular/core';

// import * as paypal from '@paypal/sdk-client'
import {render} from 'creditcardpayments/creditCardPayments'

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  donate:number = 0;
  closeForm:boolean = false;

  constructor() {

  }

  submit(amount:number){
    this.closeForm = true
    render(
      {
        id: "#paypal",
        value: amount.toString(),
        currency: 'USD',
        onApprove: () => {
          alert("successfully")
        }
      }
    )
  }


  ngOnInit() {

  }

}
