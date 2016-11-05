var analytics = angular.module('analytics',[]);

analytics.controller('analyticsController', ['$scope', '$state', function($scope, $state) {
    $scope.message = 'anallyticsController';
}]);
