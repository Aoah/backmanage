var task = angular.module('task',[]);

task.controller('tasksController', ['$scope', '$state', function($scope, $state) {
    $scope.message = 'taskController';
}]);
