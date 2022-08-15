# BexsFrontEndExam

# Author

Hamilton Lopes, 2022.

# Packages used

![image](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![image](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![image](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

- Angular 14
- NodeJS v16
- [Material Angular](https://material.angular.io/) version 14.1.1
- [Bootstrap](https://getbootstrap.com/) version 5.2.0

# How to start the project

Clone this repository in your computer and install all packages using the command:

```npm install```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# How to use the application
## Inputs

Once the application is started, users will find 5 inputs:
- Credit card number (16 digits pattern)
- Credit card Holder Name (max. 22 characters)
- Credit card expiration date (MM/YY)
- Credit card CVV (3 digits pattern)
- Number of terms to pay - from 1x to 12x. (default: none)

## Form Validation
Every input must be filled with valid data in order to submit the form, and each one has a specific pattern for validation.

## Luhn algorithm
The Luhn algorithm, also known as "modulus 10" or "mod 10", is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers.  
  
For testing purposes, the Luhn algorithm was **not** used in this app, as it would make much more complex to test the inputs. The implementation itself is not that complicated, but I've chosen to not use this algorithm to validate credit card numbers input.

# Credit Card Patterns
The Credit Card Number input handles 2 different variations of Credit Card Issuers: VISA and MASTERCARD, as well as a "Default Card" option for when the users' credit card is not in the list.

- For reference, I've used the following link when choosing the patterns: [PayPalObjects](https://www.paypalobjects.com/en_GB/vhelp/paypalmanager_help/credit_card_numbers.htm)   

### VISA
- All cards starting with 4111 and 4012 are considered VISA in this app (changes logo and card color).
### MASTERCARD
- All cards starting with 5105 and 5555 are considered MASTERCARD this app (changes logo and card color).

# Mobile/Desktop versions
The application has two versions: mobile and desktop, accessible through the browser's DevTools by resizing the window or using the responsive mode.

