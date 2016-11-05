
var contentLFactory = angular.module('homeFactory',[]);
var store = require('../data/nav.js');

contentLFactory.factory('homeStore', function() {
    var myStore = store.nav;

    return myStore;

});
