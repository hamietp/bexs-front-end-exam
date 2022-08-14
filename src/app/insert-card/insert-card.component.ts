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
  cardDefaultBackground = `radial-gradient(
    73.06% 104.31% at 14.59% 58.06%,
    #bfbfbf 0%,
    #bfbfbf 0.01%,
    #a8a8a8 33.7%,
    #727272 100%
  );`;

  cardCustomBackground = `radial-gradient(
    73.06% 104.31% at 14.59% 58.06%,
    #5a7589 0%,
    #436175 33.7%,
    #315266 57.29%,
    #124768 100%
  );
`;

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

  getColor() {
    return this.getIssuer() ==='visa' ?
      this.cardCustomBackground : this.cardDefaultBackground;
  }

  getIssuer(): CardBrandEnum {
    let valueAccessor = this.cardForm.get('cardNumber')!.value;
    this.issuerDigits = valueAccessor.substring(0, 4);

    switch (this.issuerDigits) {
      default:
        return CardBrandEnum.NOCARD;
      case '4111':
        this.cardIssuer = CardBrandEnum.VISA;
        return CardBrandEnum.VISA;
      case '4012':
        this.cardIssuer = CardBrandEnum.VISA;
        return CardBrandEnum.VISA;
      case '5105':
        this.cardIssuer = CardBrandEnum.MASTERCARD;
        return CardBrandEnum.MASTERCARD;
      case '5555':
        this.cardIssuer = CardBrandEnum.MASTERCARD;
        return CardBrandEnum.MASTERCARD;
    }
  }
}
