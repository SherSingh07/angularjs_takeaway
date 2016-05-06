console.log("-- manager --");

// creating the module
var myApp = 
angular
.module("myModule", [])
.controller("myController", function($scope) {	
	// passing data to angularjs object
	$scope.message = "Task Manager Demo By Singh";
	$scope.tasks = ["A1", "A2", "A3"];

	$scope.employee = { 
		firstName: "Cool", 
		lastName: "Guy",
		age: 27};
});