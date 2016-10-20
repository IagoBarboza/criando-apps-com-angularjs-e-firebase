// APP MODULE
angular.module('app', ['firebase'])

	// CONTROLLER
	.controller('AppCtrl', ['$scope', '$firebaseAuth', function ($scope, $firebaseAuth) {
		var auth = $firebaseAuth(firebase.auth());
		
		// FACEBOOK LOGIN
		var fbProvider = new firebase.auth.FacebookAuthProvider();
		auth.$signInWithPopup(fbProvider);
		firebase.auth().signInWithPopup(fbProvider).then(function(result) {
			console.log(result);
		})
		.catch(function(error) {
			console.log(error);  
		});
	}])
