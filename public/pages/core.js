var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
   
    $http.get( "/getdata").success(function( data ) {
        $scope.A= data; //from your sample;
        alert( "Load was performed. " + data );
      });
});