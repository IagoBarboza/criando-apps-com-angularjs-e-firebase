// APP MODULE
angular.module('app', ['firebase'])

	// CONTROLLER
	.controller('AppCtrl', ['$scope', '$firebaseAuth', function ($scope, $firebaseAuth) {
		var auth = $firebaseAuth(firebase.auth());
		
		// CREATE USER WITH EMAIL AND PASSWORD
		auth.$signInWithEmailAndPassword('iagobarboza@gmail.com', '123456').then(
			// SUCCESS CALLBACK
			function(response){
				console.log(response);
			}, 
			// ERROR CALLBACK
			function(error)
			{
				console.log(error.message)
			}
		);
	}])
