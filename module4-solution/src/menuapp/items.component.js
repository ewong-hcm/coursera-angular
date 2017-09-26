(function () {
'use strict';

angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/menuapp/templates/itemlist.template.html',
    // controller: ItemsComponentController,
    bindings: {
      list: '<',
      category: '<'
    }
})

})();
