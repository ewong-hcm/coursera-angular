(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;
  var restaurantBaseURL = "https://davids-restaurant.herokuapp.com/"


  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: restaurantBaseURL + "categories.json"
    }).then(function (response){
      return response.data
    })
  };

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: "GET",
      url: restaurantBaseURL + "menu_items.json",
      params: {
        category: categoryShortName
      }
    }).then(function (response){
      console.log(response.data)
      return response.data
    }, function (error){

    })

  };
}

})();
