(function () {
"use strict";

angular.module('public')
.service('RegisterService', RegisterService);


RegisterService.$inject = [];
function RegisterService() {
  var service = this;

  var user = {}

  service.getUser = function () {
    return user;
  };

  service.saveUser = function (form_fields) {
    user = form_fields;
    console.log("In save: " + JSON.stringify(user))
  }

}



})();
