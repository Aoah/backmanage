var data = angular.module('data',[]);
require("../my.js")

data.controller('dataController', ['$scope', '$state','$http', function($scope, $state,$http) {




   $scope.confirmed = true;

    $scope.ye=0;
    console.log($scope.id);

 $scope.add1=function(){
       $("#allform").slideToggle();
 }

     $http({
          url:'http://www.okbuy.com:8080/allDate',
          params:{

          },
          method:'get'
     })
     .then(function(res){
       $scope.data=res.data;
          console.log(res);
     },function(error){
          console.log(error);
     })
//      *********************
     $scope.add=function(){

       $("#allform").slideToggle();
       var data={
             id:$("form input:eq(0)").val(),
             price:$("form input:eq(2)").val(),
             url:$("form input:eq(1)").val(),
             dec:$("form input:eq(3)").val()
       }
         console.log($("form input:eq(0)").val());
       $.ajax({
           url:'http://www.okbuy.com:8080/addData_post?pageCount='+$scope.ye,
           data: data,
           type:'post',
       }).then(function(res){
         $scope.data.push(data);

       },function(error){
             console.log(error);
       })
     }
     $scope.remove=function(){

     }
     $scope.update=function(){


     }
     $scope.change=function(){
        $("#allform").slideToggle();


     }
}]);
