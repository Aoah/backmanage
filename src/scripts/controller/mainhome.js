var index = angular.module('index', ['homeFactory']);

index.controller('mainhome', ['$scope', 'homeStore', function($scope, homestore) {
    $scope.contentL = homestore;
    $scope.imagestate = [1, 1, 1, 1];
    var change = function(index) {
        for (var i = 0; i < $scope.imagestate.length; i++) {
            $scope.imagestate[i] = index;
        }
    }
    $scope.jiantou = function(index) {
        if (parseInt($scope.imagestate[index]) - 1) {

            $scope.imagestate[index] = "1"
        } else {
            change(1);
            $scope.imagestate[index] = "2"
        }
    }
}]);
