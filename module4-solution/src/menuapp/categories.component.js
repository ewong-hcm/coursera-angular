(function () {
'use strict';

angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/menuapp/templates/categories.template.html',
    // controller: CategoryComponentController,
    bindings: {
      list: '<'
    }
  })

// function CategoryComponentController (){
//   var $ctrl = this;
//
//   $ctrl.onInit = function () {
//     console.log('category init');
//     console.log(JSON.stringify(list))
//   }
// }

})();
