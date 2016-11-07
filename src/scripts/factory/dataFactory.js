
   var  dataFactory =angular.module("datafactory",[]);

   dataFactory.factory('datafactory',function(){

            var operation = new dataOperation();

            return operation;

   })
