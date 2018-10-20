# AngularJS to Angular migration

## Tutorials
- https://angular.io/guide/upgrade
- https://blog.nrwl.io/upgrading-from-angularjs-to-angular-talk-blog-posts-book-1ebeb6e7f14
- https://itnext.io/an-alternate-way-to-angular-migration-c7932cf05a1b

## Steps

1. npm install -g @angular/cli
1. Open command line in the project root folder
1. Delete package.json, README.md and .gitignore
1. cd ..
1. ng new angular-phonecat
1. cd angular-phonecat
1. npm install @angular/upgrade
1. npm install angular angular-animate angular-resource angular-route jquery
1. npm install @types/angular @types/angular-animate @types/angular-resource @types/angular-route --save-dev
1. Open angular.json and add to the project:
    ```
    "scripts": [
        "./node_modules/jquery/dist/jquery.js",
        "./node_modules/angular/angular.js",
        "./node_modules/angular-animate/angular-animate.js",
        "./node_modules/angular-route/angular-route.js",
        "./node_modules/angular-resource/angular-resource.js"
    ]
     ```
1. Copy /app folder content to /src/app/
1. Rename /src/app/app.module.js to /src/app/app.module.ajs.ts
1. In that file add:
    ```
    import * as ng from 'angular';

    declare global {
    const angular: ng.IAngularStatic;
    }
    ```
1. Change .js files to .ts
1. Update AppModule class with:
    ```
    constructor(private upgrade: UpgradeModule) {}

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ['phonecatApp'], {strictDi: true});
    }
    ```


# AngularPhonecat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
