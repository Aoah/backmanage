function dataOperation(ye,alldata,pagination,data){
         this.ye=ye;
         this.alldata=alldata;
         this.pagination=pagination;
         this.data=data;
}

dataOperation.prototype.init=function(){
  $http({
          url: 'http://www.okbuy.com:8080/allDate?pageCount=' + this.ye,
          params: {},
          method: 'get'
      })
      .then(function(res) {
          this.alldata = res.data.slice(0);
          console.log(alldata.length);
          for (var m = 1; m < parseInt(this.alldata.length / 12); m++) {
              this.pagination.push(m);
          }
          if (this.alldata.length % 11 && this.alldata.length > 11) {
              this.pagination.push(m);
          }

          this.data = this.alldata.slice(0, 11);
          // $scope.data = res.data;
          console.log(res);
      }, function(error) {
          console.log(error);
      })

}
