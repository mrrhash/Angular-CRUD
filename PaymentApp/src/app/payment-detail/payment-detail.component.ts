import { Component } from '@angular/core';
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
constructor(public service:PaymentDetailService) {

}
ngOnInit() {
  this.service.refreshList();
}
}
