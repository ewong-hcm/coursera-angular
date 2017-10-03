(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);


RegistrationController.$inject = ['MenuService', 'RegisterService'];
function RegistrationController(MenuService, RegisterService) {
  var $ctrl = this;


  $ctrl.submit = function() {
    MenuService.getMenuItem($ctrl.user.favdish).then(function () {
      // $ctrl.invalidItem = false;
      RegisterService.saveUser($ctrl.user)
      $ctrl.completed = true;
    },
    function () {
      $ctrl.invalidItem = true;
    })
  }
}


})();
