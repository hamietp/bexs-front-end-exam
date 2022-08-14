import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { CardFormInterface } from '../interfaces/form.interface';

@Injectable({
  providedIn: 'root',
})
export class PaymentHandlerService {
  url = 'http://localhost:3000/pagar';

  constructor(private http: HttpClient) {}

  post(paymentForm: CardFormInterface): Observable<any> {
    console.log(paymentForm);
    return this.http.post(
      this.url,
      {
        ...paymentForm,
        success: true,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
