import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-card',
  templateUrl: './insert-card.component.html',
  styleUrls: ['./insert-card.component.scss'],
})
export class InsertCardComponent implements OnInit {
  public assetsPath = '../../assets/';
  public cardForm!: FormGroup;

  public cardNumber = '**** **** **** ****';
  public paymentTerm: Array<number> = [];
  public paymentValue = 12000;
  public selected = 1;

  constructor() {
    this.paymentTerm = Array(12)
      .fill(1)
      .map((_, i) => i);
  }

  ngOnInit(): void {
    this.cardForm = new FormGroup({
      cardNumber: new FormControl('', [Validators.pattern(/^[0-9]{16}$/)]),
      cardHolderName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z ]+$/),
      ]),
      cardExpirationDate: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{2}\/[0-9]{2}$/),
      ]),
      cardCvv: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{3}$/),
      ]),
    });
  }
}
