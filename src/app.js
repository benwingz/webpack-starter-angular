import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Common from './common/common';
import Components from './components/components';
import './styles.scss';
import rx from 'rx-angular';

angular.module('myApp', [
  uiRouter,
  Common.name,
  Components.name,
  'rx'
])
.directive('app', AppComponent);
