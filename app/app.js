var angular = require('angular');

var ngModule = angular.module('app', []);


function homeComponent($scope) {
    var homeCtrl = this;
    homeCtrl.greeting = 'Hola!';
}

ngModule.controller('homeComponent', homeComponent);

