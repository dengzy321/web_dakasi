var app = angular.module('myApp', []);
app.controller('myCon', function($scope, $http) {
    $http.get("costData.php")
        .then(function (result) {
            $scope.names = result.data.records;
        });
});