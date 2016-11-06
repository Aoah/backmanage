var analytics = angular.module('analytics',['chart2']);

analytics.controller('analyticsController', ['$scope', '$state', function($scope, $state) {
    $scope.message = 'anallyticsController';
}]);
