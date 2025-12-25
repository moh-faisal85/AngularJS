# Training Steps - Integrate New Chiled Component Into Angular App
- Create a new component by executing 'ng g c roles' command via terminal
- Import new (roles) component as part of 'app.component.ts > @Component > imports ([RolesComponent])
    - Ensure respective component's import statemented added on top of page.
- Add few variable as part of 'src\app\components\roles.component.ts' file
- One Way Binding - Display variable using interpolation {title}, one way (attribute) binding <input type="text" [value]="title" />
- Two Way binding - import 'FormsModule' as part of 'src\app\components\roles.component.ts' file > @Component > imports ([FormsModule])
    - Ensure respective FormsModule's import statemented added on top of page.
- Function - Event Binding 
    -V arious way to create function with and without parameter
# ***************************************************************************************************************
# TrainingAngular18Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
