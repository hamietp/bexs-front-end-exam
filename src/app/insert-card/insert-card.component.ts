import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CardBrandEnum } from 'src/shared/helpers/card.enum';

const blank = '⠀';

@Component({
  selector: 'app-insert-card',
  templateUrl: './insert-card.component.html',
  styleUrls: ['./insert-card.component.scss'],
})
export class InsertCardComponent implements OnInit {
  public assetsPath = '../../assets/';

  paymentTerm: Array<number> = [];
  paymentValue = 12000;
  cardIssuer!: CardBrandEnum;
  issuerDigits = '';

  cardPlaceholderNumber = '**** **** **** ****';
  cardPlaceholderName = 'NOME DO TITULAR';
  cardPlaceholderExpDate = '00/00';

  cardForm = new FormGroup({
    cardNumber: new FormControl(),
    cardHolderName: new FormControl(),
    cardExpirationDate: new FormControl(),
    cardCvv: new FormControl(),
    formPaymentTerms: new FormControl(),
  });

  expDateMask = [/\d/, /\d/, '/', /\d/, /\d/];
  cvvMask = [/\d/, /\d/, /\d/];
  numMask = [
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    ' ',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    ' ',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    ' ',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
  ];

  constructor(private formBuilder: FormBuilder) {
    this.paymentTerm = Array(13)
      .fill(1)
      .map((_, i) => i);
  }

  ngOnInit(): void {
    this.initializeFormControls();
  }

  initializeFormControls(): void {
    this.cardForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required]],
      cardHolderName: ['', Validators.required],
      cardExpirationDate: ['', Validators.required],
      cardCvv: ['', Validators.required],
      formPaymentTerms: ['', Validators.required],      
    });
  }

  getIssuerError(): boolean {
    let valueAccessor = this.cardForm.get('cardNumber')!.value;
    this.issuerDigits = valueAccessor.substring(0, 4);

    switch (this.issuerDigits) {
      default:
        return false;
      case '4111':
        this.cardIssuer = CardBrandEnum.VISA;
        return true;
      case '4012':
        this.cardIssuer = CardBrandEnum.VISA;
        return true;
      case '5105':
        this.cardIssuer = CardBrandEnum.MASTERCARD;
        return true;
      case '5555':
        this.cardIssuer = CardBrandEnum.MASTERCARD;
        return true;
    }
  }
}
