var task = angular.module('task',['chart3']);

task.controller('tasksController', ['$scope', '$state', function($scope, $state) {
    $scope.message = 'taskController';
}]);
