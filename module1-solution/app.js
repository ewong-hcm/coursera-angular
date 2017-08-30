(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']
function LunchCheckController($scope){
  $scope.dishes = "";

  $scope.checkDishes = function () {
    if("" == $scope.dishes) {
      $scope.output = "Please enter data first";
      $scope.outputColor = "red";
    }
    else {
      var input = $scope.dishes.split(",");
      if (input.length <= 3) {
        $scope.output = "Enjoy!"
        $scope.outputColor = "green"
      }
      else {
        $scope.output = "Too Much!"
        $scope.outputColor = "green"
      }
    }
  }
}

})();
