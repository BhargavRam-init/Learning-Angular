(() => {
    'use strict';
    angular.module('ShoppingList', [])
    .controller('ShoppingListController1', slc1)
    .controller('ShoppingListController2', slc2)
    .service('CustomService', CustomService);

    function CustomService(){
        var service = this;
        service.listItems = [
            {itemName: 'Cookies', itemQuantity: 10},
            {itemName: 'mangoes', itemQuantity: 3},
            {itemName: 'apples', itemQuantity: 8},
            {itemName: 'Soft Drinks', itemQuantity: 7},
            {itemName: 'Chocolates', itemQuantity: 5}
        ];
        service.boughtItems = [];
        service.addItem = function(val){
            var item = service.listItems[val];
            service.listItems.splice(val, 1);
            service.boughtItems.push(item);
        }
        service.getListItems = function(){
            return service.listItems;
        }
        service.getBoughtItems = function(){
            return service.boughtItems;
        }
    }

    slc1.$inject = ['CustomService'];
    function slc1(CustomService){
        let sl1 = this;
        sl1.items = CustomService.getListItems();
        sl1.checkItems = function(index){
            CustomService.addItem(index);
        }
    }

    slc2.$inject = ['CustomService'];
    function slc2(CustomService){
        let sl2 = this;
        sl2.items = CustomService.getBoughtItems();
    }
})();