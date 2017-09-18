(function () {
'use strict';

angular.module('NarrowItDown', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);


function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found : '<',
      onRemove : '&'
    },
    restrict: "E"
  }

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.found = [];
  ctrl.searchTerm = ""

  ctrl.findItems = function () {
    if(ctrl.searchTerm === "") {
      ctrl.found = []
    }
    else {
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
      promise.then(function(response) {
        ctrl.found = response
      })
      .catch(function(error) {
        console.log("Error retrieving menu items.")
      })

    }
  }

  ctrl.removeItem = function(index){
    ctrl.found.splice(index,1)
  }

}


MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
  var service = this;

  // List of items that match
  var matchedItems = [];

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      "url" : "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function (result) {
      var foundItems = []
      for (var i = 0; i < result.data.menu_items.length; i++) {
        if (result.data.menu_items[i].description.includes(searchTerm)){
          foundItems.push(result.data.menu_items[i])
        }
      }
      return foundItems;
    });
  };

}

})();
