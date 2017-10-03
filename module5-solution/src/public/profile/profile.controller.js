(function () {
"use strict";

angular.module('public')
.controller('ProfileController', ProfileController);

ProfileController.$inject = ['MenuService','user'];
function ProfileController(MenuService, user) {
  var $ctrl = this;
  $ctrl.isRegistered = false;
  $ctrl.user = user;

  if (user.favdish){
    $ctrl.isRegistered = true;
    MenuService.getMenuItem($ctrl.user.favdish).then( function (item) {
      $ctrl.menuItem = item.data;
      console.log("menuItem: "+ JSON.stringify($ctrl.menuItem))
    })
  }
}

})();
