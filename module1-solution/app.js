(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.lunchItems = '';
      $scope.message = '';
      $scope.messageStyle = {};
  
      $scope.checkLunch = function () {
        const items = $scope.lunchItems.split(',').filter(item => item.trim() !== '');
  
        if ($scope.lunchItems.trim() === '') {
          $scope.message = 'Please enter data first';
          $scope.messageStyle = { color: 'red', border: '1px solid red' };
        } else if (items.length <= 3) {
          $scope.message = 'Enjoy!';
          $scope.messageStyle = { color: 'green', border: '1px solid green' };
        } else {
          $scope.message = 'Too much!';
          $scope.messageStyle = { color: 'green', border: '1px solid green' };
        }
      };
    }
  })();  