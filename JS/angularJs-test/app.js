let myApp = angular.module("MyApp", ["ngRoute"]);

myApp.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider

      .when("/home", {
        templateUrl: "view/home.html",
        controller: "AppController"
      })
      .when("/extras", {
        templateUrl: "view/extras.html",
        controller: "extrasController"
      })
      .when("/team", {
        templateUrl: "view/team.html",
        controller: "AppController"
      })
      .otherwise({
        redirectTo: "/home"
      });
  }
]);

myApp.controller("AppController", [
  "$scope",
  "$http",
  function($scope, $http) {
    $scope.removeWorker = function(worker) {
      let removedWorker = $scope.workers.indexOf(worker);
      $scope.workers.splice(removedWorker, 1);
    };

    $scope.addWorker = function() {
      $scope.workers.push({
        name: $scope.newWorker.name,
        position: $scope.newWorker.position
      });
      $scope.newWorker.name = "";
      $scope.newWorker.position = "";
    };

    $http.get("data/workers.json").then(function(data) {
      //   console.log(data);
      $scope.workers = data.data;
    });
  }
]);

myApp.controller("extrasController", [
  "$scope",
  function($scope) {
    $scope.doSomething = function() {
      console.log(document);
    };
  }
]);
