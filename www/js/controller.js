angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope) {
    $scope.ioniconsClicked = function (){
    	alert("Button Clicked");
    	analytics.trackEvent("Home", "Click", "Icon");
    }
});