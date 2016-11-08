
   var  dataFactory =angular.module("data-factory",[]);

    var temp  = require("./dataOperations.js");

   dataFactory.factory('datafac',function($scope){

        return  new temp(i);

   })
