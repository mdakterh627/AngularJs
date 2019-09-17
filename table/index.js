var app = angular.module('myApp' , []);
app.controller('myCtrl', function($scope){
    $scope.items = [
        {name: "Rahim" , phone: "01732"},
        {name: "Karim" , phone: "01734"},
        {name: "Abul" , phone: "01735"},
        {name: "Babul" , phone: "01739"},
        {name: "Jobbar" , phone: "01730"},
    ]

})