function dataOperation(ye,alldata,pagination,data,scope){
         this.scope=scope;
         this.scope.ye=ye;
         this.scope.alldata=alldata;
         this.scope.pagination=pagination;
         this.scope.data=data;
}

dataOperation.prototype.init=function(){
  var _this=this.scope;

  $.ajax({
          url: 'http://www.okbuy.com:8080/allDate?pageCount=' + _this.ye,
          params: {},
          method: 'get'
      })
      .then(function(res) {
            var temp =eval("("+res+")");
          //  console.log(res);
          console.log(Array.isArray(temp));
          _this.alldata = temp.slice(0);

          for (var m = 1; m < parseInt(_this.alldata.length / 12); m++) {
              _this.pagination.push(m);
          }
          if (_this.alldata.length % 11 && _this.alldata.length > 11) {
              _this.pagination.push(m);
          }

          _this.data = _this.alldata.slice(0, 11);
          // $scope.data = res.data;
         console.log(_this);
      }, function(error) {
          console.log(error);
      })

}
// var dataOperation=function(ye){
//      this.ye=ye
// };

// console.log(new dataOperation());
module.exports=dataOperation;
