angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push({
        code: $scope.newCode,
        name: $scope.newName,
        coordinates: {
                latitude: $scope.newCoordinatesLat, 
                longitude: $scope.newCoordinatesLong
            },
        address: $scope.newAddress
      });

      $scope.newCode = '';
      $scope.newName = '';
      $scope.newCoordinatesLat = '';
      $scope.newCoordinatesLong = '';
      $scope.newAddress = '';
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    
  }
]);