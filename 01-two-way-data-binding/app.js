// APP MODULE
angular.module('app', [])

	// CONTROLLER
	.controller('AppCtrl', ['$scope', function ($scope) {
		
		// ADDING USER-OBJECT ON $SCOPE(MODEL) 
		// MAKING VISIBLE TO HTML
		$scope.user = {
			name: "Iago Barboza",
			age: 24,
			email: "iagobarboza@gmail.com"
		}

		// ADDING USERS-ARRAY ON $SCOPE(MODEL) 
		// MAKING VISIBLE TO HTML
		$scope.users = [
			{name: "Iago Barboza", age: 24, email: "iagobarboza@gmail.com"},
			{name: "Fulano", age: 20, email: "fulano@gmail.com"},
			{name: "Zezinho", age: 15, email: "zezionho@gmail.com"}						
		];

	}])
