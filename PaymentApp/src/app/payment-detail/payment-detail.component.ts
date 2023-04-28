import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [
  ]
})
export class PaymentDetailComponent {
/**
 *
 */
constructor(public service:PaymentDetailService, private toastr:ToastrService) {

}
ngOnInit() {
  this.service.refreshList();
}
populateForm(selectedRecord:PaymentDetail){
  this.service.formData = Object.assign({},selectedRecord);
}
onDelete(id:number){
  if(confirm("Are you sure you want to delete this")){
  this.service.deletePaymentDetail(id).subscribe(
    res=>{
      this.service.refreshList();
      this.toastr.error("Deleted Successfully","Payment Detail Register");
    },
    err=>{
      console.log(err);
    }
  )
  }
}
}
