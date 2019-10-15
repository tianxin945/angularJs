var app = angular.module('test', []);
app.controller('myctl', function ($scope) {
    $scope.name = "tianxin";
    $scope.myclick = function () {
        alert("look look me");
    }
});