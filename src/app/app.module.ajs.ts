import './core/core.module';
import './core/phone/phone.module';
import './phone-detail/phone-detail.module';
import './phone-list/phone-list.module';

import * as ng from 'angular';

declare global {
  const angular: ng.IAngularStatic;
}

import {downgradeComponent} from '@angular/upgrade/static';
import {AppComponent} from './app.component';

const phonecatApp = angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList',
]);

phonecatApp.directive('appRoot', downgradeComponent({component: AppComponent}));
