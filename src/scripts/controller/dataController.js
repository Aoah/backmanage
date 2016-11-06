var data = angular.module('data', []);


data.controller('dataController', ['$scope', '$rootScope', '$state', '$http', '$stateParams', function($scope, $rootScope, $state, $http, $stateParams) {


    console.log();

    $scope.arr = [];
    $scope.pagination = [0]
    $scope.currentIn = 0;
    // 全选的 功能实现
    $scope.confirmedall = false;

    var alldata = [];
    $scope.data = [];

    $scope.confirmed = true;

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
    console.log($stateParams);
    if($stateParams.id+1){
    $rootScope.ye = $stateParams.id;
  }
    else{
        $rootScope.ye = 0;
    }

    $scope.add1 = function() {
        $("#allform").slideToggle();
    }
    $http({
            url: 'http://www.okbuy.com:8080/allDate?pageCount=' + $rootScope.ye,
            params: {},
            method: 'get'
        })
        .then(function(res) {
            alldata = res.data.slice(0);
            for (var m = 1; m < parseInt(alldata.length / 12); m++) {
                $scope.pagination.push(m);
            }
            if (alldata.length % 12 && alldata.length > 12) {
                $scope.pagination.push(m);
            }

            $scope.data = alldata.slice(0, 12);
            // $scope.data = res.data;
            console.log(res);
        }, function(error) {
            console.log(error);
        })
        //      *********************
    $scope.add = function() {
        $("#allform").slideToggle();
        var data = {
            id: $("form input:eq(1)").val(),
            price: $("form input:eq(3)").val(),
            url: $("form input:eq(2)").val(),
            dec: $("form input:eq(4)").val()
        }
        $scope.data.push(data);
        console.log($("form input:eq(1)").val());
        $.ajax({
            url: 'http://www.okbuy.com:8080/addData_post?pageCount=' + $rootScope.ye,
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

        console.log("tempArr  " + tempArr.length);
        $scope.data = tempArr;

        $.ajax({
                url: "http://www.okbuy.com:8080/removeData_post?pageCount=" + $rootScope.ye,
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
                url: "http://www.okbuy.com:8080/removeData_post?pageCount=" + $rootScope.ye,
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

    $scope.changeye = function(index) {
        $scope.currentIn = index;
        $scope.data = alldata.slice(index * 10, index + 11);
    }
    $scope.lastye = function() {
        if ($scope.currentIn == 0) {

        } else {
            $scope.currentIn--;
            $scope.data = alldata.slice($scope.currentIn * 10, $scope.currentIn + 11);
        }
    }
    $scope.nextye = function() {
        if ($scope.currentIn == $scope.pagination.length - 1) {

        } else {
            $scope.currentIn++;
            $scope.data = alldata.slice($scope.currentIn * 10, $scope.currentIn + 11);
        }
    }
}]);