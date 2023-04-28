import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent {

  /**
   *
   */
  constructor(public service : PaymentDetailService, private toastr: ToastrService) {


  }
  onSubmitt(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      res=>{
        form.form.reset();
        this.toastr.success('Submitted Successfully',"Payment Detail Register");
        this.service.refreshList();
      },
      err=>{
        console.log(err);
      }
    )
  }
}
