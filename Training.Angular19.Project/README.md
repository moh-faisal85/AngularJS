# TrainingAngular19Project

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

**********************
Angular Notes
**********************

- Angular 19 - Part-9 got completed

Part-10: Form Template : Copy form template from below url
---------------------------------------------------
https://getbootstrap.com/docs/5.0/forms/validation/


Part-12: Get pre build api from following web sites
---------------------------------------------------
https://jsonplaceholder.typicode.com/users

https://app.beeceptor.com/mock-server/json-placeholder
https://fake-store-api.mock.beeceptor.com/api/products

https://freeapi.miniprojectideas.com/index.html

Part-15 - Completed CRUD API method

Part-16-Customer Management System
-Design UI
-Create IObject and Bind it to form
-Create Service => write api call function
-call service api function in component to perform CRUD operation
-Add validation

Part-18-Angular-Event:
***********************
constructor
ngOnChanges
ngOnInit                -   When the component gets initialized
ngDoCheck
ngAfterContentInit      - When external content starts initialize like image , PDF
ngAfterContentChecked   - When external content properly loaded
ngAfterViewInit         - When view successfully initialize
ngAfterViewChecked      - When view successfully loaded
ngOnDestroy             - When view redirect initiated

Part-19-Angular Pipes (Data Formatting feature)


Name	        -   Description
*************       ***********
AsyncPipe       -   Read the value from a Promise or an RxJS Observable.


DecimalPipe	    -   Transforms a number into a string with a decimal point, formatted according to locale rules.
I18nPluralPipe  -   Maps a value to a string that pluralizes the value according to locale rules.
I18nSelectPipe  -   Maps a key to a custom selector that returns a desired value.
KeyValuePipe    -   Transforms Object or Map into an array of key value pairs.
PercentPipe     -   Transforms a number to a percentage string, formatted according to locale rules.
SlicePipe       -   Creates a new Array or String containing a subset (slice) of the elements.

- DatePipe        -   Formats a Date value according to locale rules.
- JsonPipe        -   Transforms an object to a string representation via JSON.stringify, intended for debugging.
- LowerCasePipe   -   Transforms text to all lower case.
- TitleCasePipe   -   Transforms text to title case.
- UpperCasePipe   -   Transforms text to all upper case.
- CurrencyPipe    -   Transforms a number to a currency string, formatted according to locale rules.


CurrencyCode  CurrencyName	    Symbol
-************  ************      ******
AED	          UAE Dirham	      د.إ   
AUD	        Australian Dollar   A$
CAD	          Canadian Dollar	  C$
CHF	          Swiss Franc	      CHF
CNY	          Chinese Yuan	    ¥
EUR	          Euro	            €
GBP	     British Pound Sterling	£
HKD	          Hong Kong Dollar	HK$
INR	          Indian Rupee	    ₹
JPY	          Japanese Yen	    ¥
KRW	          South Korean Won	₩
MXN	          Mexican Peso	    $
MYR	         Malaysian Ringgit	RM
NZD	         New Zealand Dollar	NZ$
SGD	          Singapore Dollar	S$
THB	          Thai Baht	        ฿
USD	          US Dollar	        $
ZAR	         South African Rand	R
BRL	          Brazilian Real	  R$
PHP	          Philippine Peso	  ₱
NOK	          Norwegian Krone	  kr
SEK	          Swedish Krona	    kr
DKK	          Danish Krone	    kr
RUB	          Russian Ruble	    ₽
PLN	          Polish Zloty	    zł
TRY	          Turkish Lira	    ₺
IDR	         Indonesian Rupiah	Rp

Part-20: Input and Output feature in Angular
********************************************
If we want to pass a value from parent to child - Input
If we want to pass a value from child to parent - Output

Part-22: Get boostrap templte for required need.
************************************************
https://codepen.io/leonam-silva-de-souza/pen/mybrEVM
implemented logic page from https://codepen.io/leonam-silva-de-souza/pen/mybrEVM

Login API used from https://projectapi.gerasim.in/api/UserApp/login

Note: Guard invoked before navigating from one component to another component
Generate guard using below command 

ng g g auth

Part-26-ng-container
********************
https://www.w3schools.com/bootstrap4/bootstrap_spinners.asp

Part-27-Login -Interceptor 
create interceptor using below command

PS C:\GIT\Trainings\AngularJS\Training.Angular19.Project\src\app\interceptor> ng g interceptor token