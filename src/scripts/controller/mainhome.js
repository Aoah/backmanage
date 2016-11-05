var  index  = angular.module('index',['homeFactory']);

index.controller('mainhome', ['$scope', 'homeStore', function($scope, homestore) {
   $scope.contentL = homestore;

   $scope.jian=-1;
      $scope.jiantou=function(e){
            console.log(e);


      }


}]);
