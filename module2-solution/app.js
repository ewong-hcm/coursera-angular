(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();

  toBuyList.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
  };

  toBuyList.isEmpty = function () {
    return (toBuyList.items.length == 0)
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

  boughtList.isEmpty = function () {
    return (boughtList.items.length == 0)
  };

}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of items to buy
  var itemsToBuy = [
      { name: "Cookies", quantity: 2 },
      { name: "Muffins", quantity: 6 },
      { name: "Cupcakes", quantity: 3 },
      { name: "Brownies", quantity: 5 },
      { name: "Croissants", quantity: 4 },
      { name: "Donuts", quantity: 6 }
  ];

  // List of bought items
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    boughtItems.push(itemsToBuy[itemIndex])
    itemsToBuy.splice(itemIndex,1);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
