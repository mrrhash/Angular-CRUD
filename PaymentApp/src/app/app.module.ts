import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { PaymentDetailFormComponent } from './payment-detail/payment-detail-form/payment-detail-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailComponent,
    PaymentDetailFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
