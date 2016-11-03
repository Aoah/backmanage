// import strTpl from "../tpls/main.string";
// import commonUtil from  "../utils/common.util.js";

var  strTpl = require("../tpls/main.string");
var  commonUtil = require("../utils/common.util.js");

commonUtil.render(strTpl);

var myapp=angular.module('myApp',['ui.router']);


myapp.config(function($urlRouterProvider){
     $urlRouterProvider.otherwise('/home');
})
myapp.config(function($urlMatcherFactoryProvider){
     $urlMatcherFactoryProvider.caseInsensitive(false);
})


myapp.config(['$stateProvider',function($stateProvider){
    $stateProvider
       .state('home',{
            url:'/home',
            templateUrl:'/src/scripts/tpls/ui-router/home.html',
            controller:'homeController',

            date:{

            }
       })
       .state('analytics',{
            url:'/analytics',
            templateUrl:'/src/scripts/tpls/ui-router/analytics.html',
            controller:'analyticsController',

            data:{

            }
       })
       .state('tasks',{
             url:'/tasks',
             templateUrl:'/src/scripts/tpls/ui-router/tasks.html',
             controller:'tasksController',

             data:{

             }
       })
       .state('data',{
              url:'/data',
              templateUrl:'/src/scripts/tpls/ui-router/data.html',
              controller:'dataControler',

              data:{
              }
       })
}]);

   myapp.factory('homeStore',function(){
          var storeData=new store();
          return storeData.nav;
   })

   myapp.controller('homeController',['$scope','$state','homeStore',function($scope,$state,homestore){
        $scope.contentL=homestore;
         $scope.message='home page';
    }]);

   myapp.controller('analyticsController',['$scope','$state',function($scope,$state){
           $scope.message='anallyticsController';
   }]);

   myapp.controller('tasksController',['$scope','$state',function($scope,$state){
           $scope.message='taskController';
   }]);

   myapp.controller('dataControler',['$scope','$state',function($scope,$state){
          $scope.message='dateController';
   }]);
