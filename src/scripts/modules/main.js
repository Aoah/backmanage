// import strTpl from "../tpls/main.string";
// import commonUtil from  "../utils/common.util.js";

var strTpl = require("../tpls/main.string");
var commonUtil = require("../utils/common.util.js");

commonUtil.render(strTpl);

var myapp = angular.module('myApp', ['ui.router','index','home','analytics','task','data']);


myapp.config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
})

myapp.config(function($urlMatcherFactoryProvider) {
    $urlMatcherFactoryProvider.caseInsensitive(false);
})
myapp.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'http://www.okbuy.com:8080/src/scripts/tpls/ui-router/home.html',
            controller: 'homeController',

            date: {

            }
        })
        .state('analytics', {
            url: '/analytics',
            templateUrl: 'http://www.okbuy.com:8080/src/scripts/tpls/ui-router/analytics.html',
            controller: 'analyticsController',
            data: {

            }
        })
        .state('tasks', {
            url: '/tasks',
            templateUrl: 'http://www.okbuy.com:8080/src/scripts/tpls/ui-router/tasks.html',
            controller: 'tasksController',
            data: {

            }
        })
        .state('data', {
            url: '/data{id}',
            templateUrl: 'http://www.okbuy.com:8080/src/scripts/tpls/ui-router/data.html',
            controller: 'dataController',

            data: {}
        })
}]);



// myapp.controller('mainhome', ['$scope', 'homeStore', function($scope, homestore) {
//     $scope.contentL = homestore;
//
// }])
