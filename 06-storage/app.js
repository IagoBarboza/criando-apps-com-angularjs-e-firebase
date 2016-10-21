// APP MODULE
angular.module('app', [])

	// CONTROLLER
	.controller('AppCtrl', ['$scope', function ($scope) {
		
		// STORAGE REF
		var storageRef = firebase.storage().ref();
		
		// FILE DOWNLOAD
		storageRef.child('image.png').getDownloadURL().then(function(url) {
			console.log(url);
		})
		.catch(function(error) {
			console.log(error);
		});

		// FILE UPLOAD

		var metadata = {
		  contentType: 'image/png'
		};

		$scope.setFile = function(element){
			$scope.file = element.files[0];
		}

		$scope.upload = function(){
			var uploadTask = storageRef.child().put($scope.file, metadata);
			uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
				// UPLOAD RUNNING
				function(snapshot) {
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log('Upload is ' + progress + '% done');
				}, 
				// UPLOAD ERROR
				function(error) {
					console.log(error);
				}, 
				// UPLOAD FINOSHED
				function() {
					var downloadURL = uploadTask.snapshot.downloadURL;
					console.log("File URL: ");
					console.log(downloadURL);
				}
			);
		}
	}])
