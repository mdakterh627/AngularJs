// JavaScript Document
var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider.when("/test", {
		templateUrl:"routes/test.html"
	})
})
const a = {
	name: 10,
	b: function(){

	}
}
a.b = function(){

}
app.controller('todoCtrl', function($scope, $http){
		$scope.todoName = "Todo Application";
		$scope.todos = [];
		function fatchTodos() {
			$http.get('http://192.168.0.24:4000/todos',{
				method: 'GET',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					"Accept": 'application/json',
				}
			}).then(function(response){
				console.log('response' , response)
				$scope.todos = response.data.todos


			})

		}
		fatchTodos()
		$scope.addTodo= function(){
			$scope.todos.push({name:$scope.todoInput, complete: false });
		}
			$scope.incomplete = function() {
				var count =0;
				for(var i=0; i<$scope.todos.length; i++) {
					if($scope.todos[i].complete == false) {
						count++
						
					}
					
				}
				return count;
				
				}

				$scope.warning= function(){
					if($scope.incomplete() > 3) {
						return "warning-label"
					} 
				}
				
		
			
		
	});