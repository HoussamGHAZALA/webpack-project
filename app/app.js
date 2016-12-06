var angular = require('angular');

var ngModule = angular.module('app', []);

function homeController() {
    this.greeting = 'Hola!';
}

var myComponent = {
  template: '<div>{{ homeController.greeting }}</div>',
  controller: homeController,
  controllerAs:'homeController'
};

ngModule.component('myComponent', myComponent);
