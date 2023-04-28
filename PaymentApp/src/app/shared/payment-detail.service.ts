import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  constructor(private http : HttpClient) { }

  formData:PaymentDetail = new PaymentDetail();
  readonly baseUrl = 'http://localhost:5194/api/PaymentDetails';

  list : PaymentDetail[];

  postPaymentDetail(){
   return this.http.post(this.baseUrl,this.formData);

  }
  refreshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(response => this.list = response as PaymentDetail[]);
  }
}
