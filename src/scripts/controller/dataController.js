var data = angular.module('data', ['data-factory']);

  var temp  = require("../factory/dataOperations.js");

data.controller('dataController', ['$scope', '$rootScope', '$state', '$http', '$stateParams', function($scope, $rootScope, $state, $http, $stateParams) {




    $scope.arr = [];
    $scope.pagination = [0]
    $scope.currentIn = 0;
    // 全选的 功能实现
    $scope.confirmedall = false;
    var alldata = [];
    $scope.data = [1,2];
    $scope.confirmed = true;
    $scope.ye=0;
   var operation= new  temp( $scope.ye,alldata,$scope.pagination,$scope.data,$scope);

   operation.init();
   let ffff=$scope;


       console.log(ffff);


        // $scope.$apply();
 // $state.reload();

  //  console.log(ffff);
   //
  //     console.log($scope.data);


    // console.log($scope);
    // console.log($scope.data)
  //***************************
  // 根据路由传来的不同id 获取不同的页面内容
     if ($stateParams.id + 1) {
         $scope.ye = $stateParams.id;
     } else {

         $scope.ye = 0;
     }

    //  var operation= datafactory($scope.ye,alldata,$scope.pagination,$scope.data);
     //
    //  console.log(operation);
    //  operation.init();
    //  **************************
    // $http({
    //         url: 'http://www.okbuy.com:8080/allDate?pageCount=' + $scope.ye,
    //         params: {},
    //         method: 'get'
    //     })
    //     .then(function(res) {
    //         alldata = res.data.slice(0);
    //         console.log(alldata.length);
    //         for (var m = 1; m < parseInt(alldata.length / 12); m++) {
    //             $scope.pagination.push(m);
    //         }
    //         if (alldata.length % 11 && alldata.length > 11) {
    //             $scope.pagination.push(m);
    //         }
    //
    //         $scope.data = alldata.slice(0, 11);
    //         // $scope.data = res.data;
    //         console.log(res);
    //     }, function(error) {
    //         console.log(error);
    //     })
        //      *********************




    // checkbox 点击后进行判断的回调函数
    $scope.backfn = function(chk) {
        if (chk.choose) {
                $("form input:eq(1)").val(chk.items.id),
                $("form input:eq(3)").val(chk.items.price),
                $("form input:eq(2)").val(chk.items.url),
                $("form input:eq(4)").val(chk.items.dec)

            $scope.arr.push(chk.items.id);
        } else {
            $scope.arr.splice($scope.arr.indexOf(chk.items.id));
        }
    }



    $scope.add1 = function() {
        console.log($scope);
        $("#allform").slideToggle();

        function uuid() {
            console.log("uuid");
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";

            var uuid = s.join("");
            return uuid;
        }
        $("form input:eq(1)").val(uuid());
        $("form input:eq(3)").val(""),
            $("form input:eq(2)").val(""),
            $("form input:eq(4)").val("")
    }


    $scope.add = function() {
        $("#allform").slideToggle();

        var data = {
            id: $("form input:eq(1)").val(),
            price: $("form input:eq(3)").val(),
            url: $("form input:eq(2)").val(),
            dec: $("form input:eq(4)").val()
        }
        $scope.data.push(data);
        alldata.push(data);
        console.log($("form input:eq(1)").val());
        $.ajax({
            url: 'http://www.okbuy.com:8080/addData_post?pageCount=' + $scope.ye,
            data: data,
            type: 'post',
        }).then(function(res) {


        }, function(error) {
            console.log(error);
        })
    }
    $scope.remove = function() {
        var arr = $scope.arr;
        console.log($scope.confirmedall);
        if ($scope.confirmedall) {
            if (confirm("即将删除所有的数据！")) {
                arr = [];
                for (var i = 0; i < $scope.data.length; i++) {
                    arr.push($scope.data[i].id);
                }
            } else {

            }
        } else {}
        var tempArr = $scope.data;
        for (var k = 0; k < arr.length; k++) {
            console.log(arr[k]);
            tempArr = tempArr.filter(function(item, index, array) {
                return !(arr[k] == item.id);
            })

        }

        alldata=alldata.slice(0,$scope.currentIn*11).concat(tempArr,alldata.slice(($scope.currentIn+1)*11))

        $scope.data = tempArr;


        $.ajax({
                url: "http://www.okbuy.com:8080/removeData_post?pageCount=" + $scope.ye,
                data: {
                    data: arr
                },
                type: "post",
                success: function(data) {
                    // ajaxGet(ye);
                }
            })
            .then(function(res) {
                console.log(res);
            }, function(error) {
                alert("删除失败！")
            })

    }

    $scope.update = function() {


    }
    $scope.change = function() {
        $("#allform").slideToggle();


        $scope.data = $scope.data.filter(function(item, index, array) {
            return !($scope.arr[0] == item.id);

        })

        var arr = [];
        arr.push($("form input:eq(1)").val())

        $scope.data.shift(data);

        $.ajax({
                url: "http://www.okbuy.com:8080/removeData_post?pageCount=" + $scope.ye,
                data: {
                    data: arr
                },
                type: "post",
                success: function(data) {
                    // ajaxGet(ye);
                }
            })
            .then(function(res) {
                console.log(res);
            }, function(error) {
                alert("删除失败！")
            })
    }

    //  分页显示不同的数据

    $scope.changeye = function(index) {
        $scope.currentIn = index;
        $scope.data = alldata.slice(index * 11, (index+1)*11);
    }
    $scope.lastye = function() {
        if ($scope.currentIn == 0) {

        } else {

            $scope.currentIn--;
            $scope.data = alldata.slice($scope.currentIn * 11, ($scope.currentIn+1)*11);

        }
    }
    $scope.nextye = function() {
        if ($scope.currentIn == $scope.pagination.length - 1) {

        } else {
            $scope.currentIn++;
            $scope.data = alldata.slice($scope.currentIn * 11, ($scope.currentIn+1)*11);

        }
    }
}]);
