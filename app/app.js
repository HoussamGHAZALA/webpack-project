var angular = require('angular');

var ngModule = angular.module('app', []);

function homeController() {
    this.greeting = 'Hola!';
}

var angularComponent = {
  template: '<div>{{ homeCtrl.greeting }}</div>',
  controller: homeController,
  controllerAs:'homeCtrl'
};

ngModule.component('angularComponent', angularComponent);
