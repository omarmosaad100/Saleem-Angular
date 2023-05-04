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
  error:any;

  constructor() {
  }

  submit(amount:number){
    if(this.donate > 0){
      this.closeForm = true;
      this.error = false;

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
    else{
      this.error = true;
    }

  }


  ngOnInit() {

  }

}
