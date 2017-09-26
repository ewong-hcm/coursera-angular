(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);


ItemListController.$inject = ['$stateParams', 'items'];
function ItemListController($stateParams, items) {
  var itemList = this;
  itemList.items = items.menu_items;
  itemList.category = items.category.name;

  itemList.onInit = function () {
    console.log("INIT ItemList")
  }
}

})();
