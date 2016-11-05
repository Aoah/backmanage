 var home = angular.module('home',['chart1']);

home.controller('homeController', ['$scope', '$state',function($scope, $state, homestore) {

    $scope.message = 'home page';
}]);
